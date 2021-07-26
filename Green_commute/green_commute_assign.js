///<reference types="cypress"/>
// cy.fixture('locations.json').as('loc')
describe('Home page',()=>{

  before(()=>{
    cy.visit('http://bc15-green-commute.dev-apps.io/')
  })

  it('Select Your Locations',()=>{

    cy.get('.jss7').type("Hyd{downarrow}{enter}")
    //expect(arr).to.have.any.keys('loc')
    cy.get(':nth-child(1) > [data-testid=button]').click()

  })

  it('Job Locations',()=>{
    cy.get('.MuiAutocomplete-root').type("Hyd{downarrow}{enter}")
    cy.get(':nth-child(1) > [data-testid=button]').click()
  })
  it('next,skip,back buttons',()=>{
    cy.get('[data-testid=back-button] > .MuiSvgIcon-root').click()
    .then(()=>{
      cy.get('.jss6 > .MuiTypography-root').should('have.text','Where do you want to work?')
    })

    cy.get('.MuiInputBase-input').clear()
    cy.get('.jss6 > .MuiTypography-root').click()

    cy.get(':nth-child(1) > [data-testid=button]').click()
    cy.on('window:alert',(msg)=>{
      expect(msg).to.contain('please enter the location')
    })
    
    cy.get(':nth-child(2) > [data-testid=button]').click()
  })

  it('Skills',()=>{
    cy.contains('Enter your skills').click().then(()=>{
      cy.get('.MuiInputBase-root').type("{downarrow}{enter}")
    })
    cy.get('.MuiInputBase-root').type("{downarrow}{enter}")
    cy.get('.MuiInputBase-root').type("{downarrow}{downarrow}{enter}")
    .then((texts)=>{
      expect(texts).to.have.length.of.at.least(1)
    })
    cy.get('[data-testid=button]').click()
    // .then(()=>{
    //   cy.url().should('include','/findJobs')
    // })
  })



  it('Find jobs',()=>{
    cy.get('.jss90 > .jss86 > .MuiInputBase-root').type("Hyd{downarrow}{enter}")
    cy.get('[data-testid=find-job] > .MuiButton-root').click()
    
    //filter
    cy.get('[data-testid=filterButton]').click()
    cy.get(':nth-child(2) > [data-testid=filter-type] > :nth-child(2) > .jss123 > [data-testid=filter] > .MuiTypography-root > .jss124').click()
    cy.get(':nth-child(5) > [data-testid=filter-type] > :nth-child(5) > .jss123 > [data-testid=filter] > .MuiTypography-root > .jss124').click()
    cy.get(':nth-child(2) > [data-testid=button]').click()


    cy.get('.MuiGrid-spacing-xs-9 > :nth-child(1)').click()
    cy.get('.MuiGrid-root > .MuiButton-outlined').click()
    
    cy.get('.MuiGrid-spacing-xs-2 > :nth-child(2)').click()
    cy.get('.MuiGrid-root > .MuiButton-outlined').click()
    cy.get(':nth-child(3) > .MuiListItemText-root > .MuiTypography-root').click()

    cy.on('window:alert',(msg)=>{
      expect(msg).to.contain('Job already present in saved jobs')
    })

  })

  it('remove saved job',()=>{

    cy.get('.MuiGrid-spacing-xs-9 > :nth-child(1)').click()
    cy.get('.MuiButton-outlined').click()
    // cy.wait(1000)
    cy.get(':nth-child(4) > .MuiListItemIcon-root > .MuiSvgIcon-root').click()
    
  })

  it('clear filter',()=>{

    cy.get(':nth-child(2) > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('[data-testid=filterButton]').click()
    
    cy.get(':nth-child(2) > [data-testid=button]').click()

    cy.get('.jss208 > .MuiGrid-container > .MuiGrid-grid-xs-2').click()

    cy.get('[data-testid=filterButton]').click().then(($input)=>{
      expect($input).not.to.be.checked
    })

    cy.get('[data-testid=filter-group]').contains('Past 24 hours').then(($input)=>{
      expect($input).not.to.be.checked
    })
    cy.get('.jss233 > .MuiSvgIcon-root').click()
    
  })

})
