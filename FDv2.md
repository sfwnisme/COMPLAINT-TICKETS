# Internal Ticketing System (ITS) - Functional Decomposition

## 1. Authentication & User Management

### 1.1 User Authentication

- 1.1.1 Login functionality
- 1.1.2 Password management
- 1.1.3 Session handling
- 1.1.4 Security protocols implementation

### 1.2 User Administration (Super Admin)

- 1.2.1 User profile creation
- 1.2.2 Role assignment
- 1.2.3 Department assignment
- 1.2.4 User account management
- 1.2.5 Access control management

## 2. Ticket Management System

### 2.1 Ticket Creation

- 2.1.1 Ticket form interface
- 2.1.2 File attachment handling [*attachment_id sparated endpoint*]
- 2.1.3 Ticket ID generation
- 2.1.4 Initial status assignment [*issued*]
- 2.1.5 Timestamp recording [*current timestamp from the backend*]

### 2.2 Ticket Processing

- 2.2.1 Status update mechanism
- 2.2.1.1 Status update to in progress automatically by the first intractive(comment or message).
- 2.2.1.2 Status can not be updated to the prev status.
- 2.2.1.3 Status can be update to (blocked) status if there it depends on the client response.
- 2.2.1.4 Status can be update to (in progress) status after the (block) status.
- 2.2.2 Priority assignment
- 2.2.3 Department routing [*future version*]
- 2.2.4 Assignment handling [*department assignment*]
<!-- - 2.2.5 Response tracking [*response history*] -->
- 2.2.6 Ticket history [*changes history and intractive history*]

### 2.3 Ticket Categorization

- 2.3.1 Main category assignment (Complaint, Inquiry, Suggestion) [*non-editiable*]
- 2.3.2 Tags management [*use tages instead of custom categories*]
- 2.3.3 Tag hierarchy handling [*nested tags*]
- 2.3.4 Tag-based routing rules

## 3. Notification System

### 3.1 In-App Notifications

Receive notification: Admin, CSR, and The Related Department.

- 3.1.1 Status change alerts.
- 3.1.2 Assignment notifications
- 3.1.3 Due date reminders [*future version*]
- 3.1.4 Priority update alerts

### 3.2 Alert Management

- 3.2.1 Overdue ticket detection [*select standard days by the Super Adming from the application settings*]
- 3.2.2 SLA violation alerts [SAL](./SAL-Example.md)
- 3.2.3 Notification preferences [*user settings*]
- 3.2.4 Alert history tracking [*future version*]
- 3.2.4.1 Super Admin can see the alerts history for the entire users
- 3.2.4.2 The department Representative can check his alert history

## 4. Search and Filter System

### 4.1 Search Functionality

- 4.1.1 Ticket ID search
- 4.1.2 Keyword search
- 4.1.3 Full-text search
- 4.1.4 Title search
- 4.1.5 Search history [*future version*]

### 4.2 Filter System

- 4.2.1 Status filters
- 4.2.2 Priority filters
- 4.2.3 Date range filters
- 4.2.4 Department filters
- 4.2.5 Category filters
- 4.2.6 Tag filters

## 5. Reporting and Analytics

### 5.1 Dashboard

- 5.1.1 Real-time metrics display
- 5.1.2 Performance indicators
- 5.1.3 Ticket status overview
- 5.1.4 Department workload visualization

### 5.2 Report Generation

- 5.2.1 Ticket volume reports
- 5.2.2 Response time analysis
- 5.2.3 Resolution rate tracking
- 5.2.4 Custom report builder [*future version*]
- 5.2.5 Export functionality [*future version*]

## 6. System Administration

### 6.1 System Configuration

- 6.1.1 General settings management [*standards + custom*]
- 6.1.2 Department configuration [*future version*]
- 6.1.3 Category management [*future version*]
- 6.1.4 SLA configuration

### 6.2 System Monitoring [*future version*]

- 6.2.1 Performance monitoring
- 6.2.2 Error logging
- 6.2.3 User activity tracking
- 6.2.4 System health checks

## 7. Data Management [*backend explains*]

### 7.1 Data Storage

- 7.1.1 Ticket data persistence
- 7.1.2 File storage management
- 7.1.3 User data management
- 7.1.4 System logs storage

### 7.2 Data Security

- 7.2.1 Data encryption
- 7.2.2 Access control implementation
- 7.2.3 Audit trail maintenance
- 7.2.4 Backup management
