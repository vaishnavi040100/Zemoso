

// Create a new task
// Edit new task
// Change the due date
// Sharing the task/app with friends
// Mark task as done
// Reopen a task
// Delete a task
// Create, delete & update label

///<reference types="cypress"/>

describe('Todoist',()=>{
    it('get command',()=>{
        cy.request({
            method:'GET',
            url:'https://api.todoist.com/rest/v1/projects',
            auth : {
                bearer: 'a5b7928da8871079df05407ecc24d68013169934'
            }
        })
    })
    it('New task creation',()=>{
        cy.request({
            method:'POST',
            url:'https://api.todoist.com/rest/v1/tasks',
            auth : {
                bearer: 'a5b7928da8871079df05407ecc24d68013169934'
            },
            headers :{
                "Content-Type": "application/json"
            },
            body :{
                "content" : "Shopping List",
            }
        }).then(response=>{
            expect(response.body).to.have.property('content','Shopping List')
            cy.request({
                method : 'POST',
                url : "https://api.todoist.com/rest/v1/tasks/"+response.body.id,
                auth : {
                    bearer : 'a5b7928da8871079df05407ecc24d68013169934'
                },
                headers : {
                    'Content-Type' : "application/json",
                },
                body : {
                    "content" : "Buy Shirt",
                    "shared" : true
                }
            })
            cy.request({
                method : 'GET',
                url : "https://api.todoist.com/rest/v1/tasks/"+response.body.id,
                auth : {
                    bearer : 'a5b7928da8871079df05407ecc24d68013169934'
                }
            }).then(response =>{
                expect(response.body).to.have.property('content','Buy Shirt')                
            })

        })
    })
    it('Updating Task',()=>{
        cy.request({
            method : 'POST',
            url : "https://todoist.com/showTask?id=4992284146",
            auth : {
                bearer : 'a5b7928da8871079df05407ecc24d68013169934'
            },
            headers : {
                'Content-Type' : "application/json",
            },
            body : {
                "content" : "Buy Shirt",
            }
        })
    })
    it('Changing Due Date',()=>{
        cy.request({
            method : 'POST',
            url : "https://todoist.com/showTask?id=4992284146",
            auth : {
                bearer : 'a5b7928da8871079df05407ecc24d68013169934'
            },
            headers : {
                'Content-Type' : "application/json",
            },
            body : {
                "due_string": "tomorrow",
            }
        })
    })

    it('Closing Task',()=>{

        cy.request({
            method : 'POST',
            url : "https://api.todoist.com/rest/v1/tasks/4992284146/close",
            auth : {
                bearer : 'a5b7928da8871079df05407ecc24d68013169934'
            },
            body : {
                "due_string": "tomorrow",
                "completed": true
            }
        })
    })

    it('Deleting Task',()=>{

        cy.request({
            method : 'DELETE',
            url : "https://api.todoist.com/rest/v1/projects/4992284146", 
            auth : {
                bearer : 'a5b7928da8871079df05407ecc24d68013169934'
            }
        })
    })
   
  
})

