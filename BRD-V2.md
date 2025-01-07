# Business Requirements Document (BRD)

## 1. **Executive Summary**

### Project Overview

"The Internal Ticketing System (ITS) is a web-based application designed to centralize and streamline the company's issue tracking and complaint management process. This system will replace the current informal methods of using Google Sheets and WhatsApp, providing a structured, searchable, and efficient platform for managing internal communications and issue resolution."

### Business Objectives

- Centralize all internal complaints and inquiries into a single, accessible platform
- Create a standardized process for issue submission, tracking, and resolution
- Establish clear accountability and tracking mechanisms for issue resolution
- Build a searchable knowledge base from resolved issues
- Generate actionable insights through data analytics and reporting
- Improve response times and service quality for internal team members

- Enhance efficiency in managing complaints and inquiries.
- Minimize human errors caused by manual entry.
- Provide a centralized platform for tracking, categorizing, and resolving tickets.
- Improve reporting and analytics for better decision-making.
- Ensure scalability for future growth.

### Expected Benefits

#### 1.Operational Efficiency

- Reduced response time to internal issues
- Elimination of duplicate effort and lost communications
- Automated tracking and follow-up processes
- Improved team productivity through organized workflow
- Flexibility of assigning and inviting Department representative between Customer service representative

#### 2.Data Management

- Centralized repository of all historical issues
- Searchable knowledge base for common problems
- Structured data for analysis and reporting
- Secure storage of sensitive information

#### 3.Business Intelligence

- Trend analysis for common issues
- Performance metrics for team responsiveness
- Data-driven decision making for process improvements
- Marketing insights from historical data

## 2. Scope

### In Scope

- Development of a web-based ticketing system.
- User roles: Admin, Customer Service, Department Representatives, and client.
- Permissions feature for some restrictions. [future]
- Features for ticket creation, categorization, tagging, and assignment tracking.
- Dashboard for real-time monitoring and analytics.
- Notification system for ticket updates.
- Integration with email for ticket creation and status updates.[Future]
  
### Out of Scope

- Integration with our external CRM system.
- Popular Ecommerce SaaS integrations, like Shopify, and Salla.[Future]
- AI-powered ticket resolution or chatbots. [Future: more complicated and expenssive to provide]

## 3. Stakeholders

### Super Admin (Owner)

- Oversees all internal and external ticketing activities.
- Manages communication workflows for internal teams.
- Configures internal ticketing workflows.
- Monitors internal communication analytics.

### General Admin (Executive, Not Owner)

- Facilitates internal ticketing processes across departments.
- Monitors communication efficiency and ticket resolution timelines.
- Creates and tracks internal tickets for cross-team collaboration.

### Specific Department Admins

- Manage internal tickets and communication within their departments.
- Coordinate with other departments to resolve cross-department issues.
- Resolve internal department-specific issues via tickets.
- Collaborate on cross-department tickets for quicker solutions.

### Customer Service Representatives

- Create internal tickets for issues requiring technical or departmental assistance.
- Collaborate with department representatives to resolve issues.
- Submit internal tickets for resources or assistance required to address client concerns.
- Communicate with clients on their related tickets.

### Clients (Authorized External Users)

- Submit external tickets and receive updates from customer service.
- Interactive with the Customer Service Representatives.

### Internal Employees (All Users Except Clients)

- Can create tickets for internal operational challenges (e.g., IT support, HR queries).
- Use the system to communicate effectively with other departments, reducing time-consuming informal discussions.

  #### Features

  ##### Internal Communication and Ticketing

  - Purpose: Reduce inefficient informal communication by providing a structured method for addressing internal issues.

  ##### Key Functionalities

  - Internal Ticket Creation: Any user can raise a ticket for internal operational or technical issues.
  - Department Collaboration: Tickets can be assigned to specific departments or individuals for resolution.
  - Priority and Status Tracking: Internal tickets include fields for priority, deadlines, and status updates.
  - Audit Trails: Keep track of all internal communications related to a ticket.

  ##### Benefits

  1. Efficiency: Centralized platform for all internal and external communication.
  2. Accountability: Tracks the progress of every ticket, ensuring resolution.
  3. Time-Saving: Eliminates the need for informal follow-ups in lobbies or email chains.
  4. Transparency: Provides visibility into ongoing issues and resolutions.

## 4. Functional Requirements

### Ticket Management

- Create, edit, and delete tickets.
- Assign tickets to specific departments or users.
- Track ticket status (Open, In Progress, Resolved, Closed).
- Attach relevant files or images to tickets. [can be link or attachment]
  
### Categorization & Prioritization

- Main ticket types (Complaint, Inquiry, Suggestion).
- Tags system for related tickets.
- Assign priority levels (Low, Medium, High).

### Loging and registration

- Super Admin: main admin, who can create other users profiles.
- Other roles: only can login after the super admin create their accounts.

### User Roles & Permissions

more details in [3. Stakeholders](#3-stakeholders)

- Super Admin(owner): Full access to manage the system.
- Admin(not owner): Full access to manage the system.
- Customer Service: Create and manage tickets, assign departments.
- Department Representatives: Resolve tickets assigned to their department.
- Client: Create ticket by authorized CRMs or integrations.

### Notifications & Alerts

- Email or in-app notifications for ticket updates.[in-app]
- Alerts for overdue tickets.

### Reporting & Analytics

- Generate reports on ticket trends, response times, and resolutions.
- Dashboard view for key metrics.

### Search & Filter

- Search tickets by ID, type, status,tag, or date range.
- Filter tickets by department, priority, tags, or assigned user.

## 5. Non-Functional Requirements

### Performance

 The system should handle up to 500 concurrent users without performance degradation.

### Scalability

 Must be scalable to accommodate increasing users and tickets.

### Security

 Implement role-based and permissions access control, data encryption, and secure authentication.

### Usability

 Simple and intuitive UI to minimize the learning curve.

### Accessability

 Enhance the accessability for the users.

## 6. Risks & Assumptions [for simulation]

### Risks

- Resistance to change from employees accustomed to Google Sheets.
- Potential downtime during migration to the new system.

### Assumptions

- All employees will have access to necessary devices for using the application.
- Internet connectivity will be available at all times.

## 7. Timeline [for simulation]

- Requirements Gathering: 2 weeks
- Design Phase: 3 weeks
- Development Phase: 6 weeks
- Testing & QA: 2 weeks
- Deployment & Training: 2 weeks
- Total: 15 weeks

## 8. Budget Estimate [for simulation]

- Development costs (frontend & backend)
- Hosting and server costs
- Initial training sessions
- Contingency fund (10% of the total budget)

## 9. Success Metrics

- Reduction in ticket resolution time by 30%.
- Decrease in errors and lost tickets by 90%.
- Employee satisfaction score > 85% after implementation.
