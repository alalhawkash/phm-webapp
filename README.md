# PHM - Population Health Management Dashboard

A web-based dashboard for managing population health data with role-based access control.

## ✨ Features

- **Role-based Authentication** via Supabase
  - **Admin**: Full access to all data and user management (including creating new users)
  - **Cluster**: Access to cluster overview
  - **Zone**: Access to specific zone data only
  - **PHC**: Access to specific PHC data only

- **Data Visualization**
  - Screening metrics
  - Diabetes Management (DM) metrics
  - Pre-Diabetes (Pre-DM) metrics
  - Zone and PHC performance rankings

- **Responsive Design**
  - Works on desktop, tablet, and mobile devices
  - Dark mode support

## 🚀 Quick Start

1. **Open `glass.html` in a web browser**
   - No build process required
   - Works as a static HTML file

2. **Sign in with your credentials**
   - Use your email and password set up in Supabase

## 📁 Project Structure

```
test-auth/
├── glass.html                    # Main application file
├── nhc-logo.png                  # Logo image
├── loading-logo.gif              # Loading animation
├── add-admin.js                  # Script to add admin users
├── create-users-table.sql        # SQL script to create users table
├── supabase/
│   ├── functions/
│   │   └── create-user/          # Edge Function for user creation
│   │       └── index.ts
│   └── README.md                 # Edge Function deployment guide
└── README.md                     # This file
```

## 🛠️ Technology

- **Frontend**: Vanilla HTML/CSS/JavaScript
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **Data Source**: Google Sheets (via CSV export)

## 👥 User Management

### Creating Users (Admin Only)

Admin users can create new users directly from the dashboard:

1. Log in as an admin user
2. Click the **Settings** button in the header
3. Click the **Create User** tab
4. Fill in the form:
   - **Email**: User's email address (any domain)
   - **Password**: Minimum 6 characters
   - **Role**: Select from Admin, Cluster, Zone, or PHC
   - **Zone**: Required for Zone and PHC users
   - **PHC Name**: Required for PHC users
5. Click **Create User**

**Note**: The Edge Function must be deployed first. See `supabase/README.md` for deployment instructions.

### Adding Admin Users via Script

To add an admin user via command line:

```bash
node add-admin.js <password>
```

Example:
```bash
node add-admin.js admin123
```

## 📝 Notes

- The application loads data from Google Sheets
- Make sure your Google Sheet is set to "Anyone with the link can view"
- Authentication is handled by Supabase - no backend server required
- User creation requires the Supabase Edge Function to be deployed (see `supabase/README.md`)

## 🔒 Security

- User authentication via Supabase
- Row Level Security (RLS) policies protect user data
