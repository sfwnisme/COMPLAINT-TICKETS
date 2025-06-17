# Ticket Issue System

> [!NOTE]
> This project is planned to be built with every component developed from scratch, including custom UI components, functions, and more.


## Technologies Used

- React
- TypeScript
- CSS Modules
- Tanstack Query
- Axios
- Fully Custom, Reusable UI Components
- React Hook Form
- Zod
- Visi ("bias, it's my package")

You can check the backend project [here](https://github.com/sfwnisme/backend-ticket-system).

## Project Status

### Tasks

 | status | task                                                                        |
 | ------ | --------------------------------------------------------------------------- |
 | done   | create ticket                                                               |
 | done   | implement ck editor                                                        |
 | -      | get tickets by department, tags, status                                     |
 | done   | ticket page                                                                 |
 | done   | update ticket                                                               |
 | done   | modify ticket information                                                   |
 | done   | add ticket to department                                                    |
 | done   | ticket assign user                                                          |
 | -      | remove assign user                                                          |
 | done   | get all departments                                                         |
 | done   | create department                                                           |
 | done   | update department                                                           |
 | done   | delete department                                                           |
 | done   | get all tags                                                                |
 | done   | create tag                                                                  |
 | done   | update tag                                                                  |
 | done   | delete tag                                                                  |
 | -      | search for tickets                                                          |
 | -      | update Inputs array component to accept select and ck editor                |
 | -      | show the ticket settings only for the assigned user                         |
 | -      | show the assigned or the public tickets for the users                       |
 | done   | prevent editing (assigned user, and department) resolved and closed tickets |

### Completed Features

- [x] Alert message system for success and error states
- [x] comment component
- [x] create comment => implement the validation with zod
- [x] comments that created by the frontend with true as a solution not marked
- [x] skeleton loading
- [x] create array for inputs data with typescript interface to sure the exact required data to loop instead of adding inputs manually
- [ ] Create Auth wrapper for the permissions, like `<Permissions when={true}>...</Permissions>`
- [ ] error handling
- [ ] global delete dialog

#### ticket
  
- [x] create ticket
- [ ] update ticket
- [x] delete single ticket
- [ ] delete many tickets
- [x] loading skeleton for all the requests
- [ ] search for tickets

#### departments

- [x] get department data
- [ ] create department
- [x] update department
- [ ] delete department

#### tags

- [ ] get tags data
- [ ] create tag
- [ ] update tag
- [ ] delete tag

#### metrics

- [ ] tickets number
- [ ] time tickets resolved
- [ ] date range for metrics
- [ ] most commont words used

### Completed components

### In Progress

- [ ] Comprehensive text component system with:
  - Type variants (h1, h2, h3, h4, h5, h6, p, small, 12px, 11px)
  - Color variants (primary, info, danger, success, warning)
  - Font weights (200, 400, 500, 600, 700, 800, 900)
  - Standardized sizing for application consistency
  - Padding and margin props to avoid CSS modules nesting issues

## Backlog

>[!note]
> Some ideas shine through working on this project, thus it included below as a blacklog tasks

- [ ] buttons for next and prev ticket on the float ticket component header
- [ ] gloabal error handling
