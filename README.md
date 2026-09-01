📦 JAXL — Shipment Tracking Timeline
A unified shipment tracking experience built from inconsistent provider data.








✨ Overview

JAXL Shipment Tracking Timeline is a responsive React application that transforms tracking data from multiple logistics providers into one clean, consistent customer experience.

Each shipping provider returns data differently — with different field names, timestamp formats, status values, and levels of information.

Instead of creating separate UI implementations for each provider, this project uses a common normalization layer and a single reusable timeline component.

┌───────────────────┐
│   Shopify Data    │
└─────────┬─────────┘
          │
┌───────────────────┐
│ Shiprocket Data   │
└─────────┬─────────┘
          │
┌───────────────────┐
│ NimbusPost Data   │
└─────────┬─────────┘
          │
          ▼
   ┌──────────────┐
   │ Normalizer   │
   └──────┬───────┘
          │
          ▼
   ┌──────────────┐
   │ Common Event │
   │    Model     │
   └──────┬───────┘
          │
          ▼
   ┌──────────────┐
   │   Timeline   │
   │  Component   │
   └──────────────┘

🚀 Live Preview

🌐 Live Demo:
https://your-deployed-app-url.com

📁 GitHub Repository:
https://github.com/YOUR_USERNAME/YOUR_REPOSITORY

Replace the URLs above with your actual deployment and repository links.

🎯 What This Project Demonstrates

This assignment focuses on both functional correctness and UI/UX quality.

⚙️ Functional Engineering
🔄 Multiple provider formats normalized into one model
📅 Chronological event sorting
🧹 Duplicate event removal
🕐 Multiple timestamp formats handled
🛡️ Unknown statuses handled gracefully
📝 Missing descriptions handled safely
🧩 One shared timeline component for all providers
🎨 UI / UX
Clear visual hierarchy
Status-specific icons and colors
Consistent spacing and alignment
Responsive desktop/mobile layout
Clean provider switching experience
Readable timestamps and descriptions
Loading and empty states
🚚 Supported Providers
🛍️ Shopify

Uses ISO 8601 timestamps and provides event messages.

{
  "status": "delivered",
  "timestamp": "2026-07-22T14:32:00Z",
  "message": "Package delivered"
}

🚀 Shiprocket

Uses different field names and DD-MM-YYYY HH:mm:ss timestamps.

{
  "current_status": "DELIVERED",
  "status_date": "21-07-2026 16:05:00"
}


The dataset also contains a duplicate event to demonstrate deduplication.

📦 NimbusPost

Uses Unix timestamps in seconds and introduces a provider-specific status.

{
  "event_status": "RTO_INITIATED",
  "event_time": 1721520000
}


RTO_INITIATED represents Return to Origin Initiated — the shipment is being returned to the sender after an unsuccessful delivery attempt.

🧠 Normalized Data Model

Regardless of the provider, the UI receives a consistent event structure:

{
  status: "in_transit",
  timestamp: "2026-07-20T19:45:00Z",
  description: "Package is in transit"
}


This separation between data transformation and presentation keeps the timeline component simple and reusable.

Provider → Common Model
Shopify
  status
  timestamp
  message
       │
       ▼
┌──────────────────────┐
│ status               │
│ timestamp            │
│ description          │
└──────────────────────┘
       ▲
       │
Shiprocket
  current_status
  status_date

       ▲
       │
NimbusPost
  event_status
  event_time

🧹 Data Processing

The application performs several transformations before displaying events.

1. Sort Events

Events are always displayed:

Oldest → Newest

This works even when the provider returns events in an inconsistent order.

2. Remove Duplicates

Two events are considered duplicates when they have the same:

status + timestamp


For example, the duplicate Shiprocket IN_TRANSIT event is shown only once.

3. Normalize Timestamps

Different provider formats are converted into a consistent date representation before being displayed.

Supported formats include:

ISO 8601
2026-07-22T14:32:00Z

DD-MM-YYYY HH:mm:ss
21-07-2026 16:05:00

Unix timestamp
1721520000

4. Handle Unknown Statuses

Unexpected statuses don't break the UI.

Instead, they fall back to a generic visual treatment.

For example:

❔ RTO_INITIATED


This allows new provider statuses to be displayed without requiring the timeline component to be rewritten.

5. Handle Missing Descriptions

Missing messages are handled gracefully without displaying:

undefined
null


or creating broken/empty-looking layouts.

🎨 UI Design

The interface uses a card-based layout with a vertical shipment timeline.

Visual Language
Element	Purpose
🎨 Color	Quickly communicates status
📦 Icons	Makes shipment states recognizable
🕐 Timestamp	Shows when the event occurred
📝 Description	Provides additional context
📍 Timeline	Communicates shipment progression

Status indicators use Lucide React icons to make the tracking history easier to scan.

📱 Responsive Experience

The interface is designed to work across different screen sizes.

Desktop
┌──────────────────────────────────────┐
│          Shipment Tracking           │
│                                      │
│   ● Delivered                        │
│   │  Jul 22, 2026 • 2:32 PM          │
│   │  Package delivered               │
│   │                                  │
│   ● Out for Delivery                 │
│   │  Jul 22, 2026 • 8:10 AM          │
│   │                                  │
│   ● In Transit                       │
└──────────────────────────────────────┘


Mobile
┌────────────────────┐
│ Shipment Tracking  │
│                    │
│ ● Delivered        │
│ │ Jul 22 • 2:32 PM │
│ │                  │
│ ● Out for Delivery │
│ │ Jul 22 • 8:10 AM │
│ │                  │
│ ● In Transit       │
└────────────────────┘

🛠️ Tech Stack
Technology	Purpose
⚛️ React	UI development
🎨 Tailwind CSS	Styling & responsive design
✨ Lucide React	Shipment/status icons
⚡ Vite	Development & build tooling
📄 JSON	Sample provider data
🔧 Git	Version control
📂 Project Structure
JAXLAssignment/
│
├── 📁 public/
│
├── 📁 src/
│   ├── 📁 components/
│   │   └── ShipmentTimeline/
│   │
│   ├── 📁 data/
│   │   ├── sample-shopify.json
│   │   ├── sample-shiprocket.json
│   │   └── sample-nimbuspost.json
│   │
│   ├── 📁 utils/
│   │   └── normalization/
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md


The exact structure may vary slightly depending on the implementation.

▶️ Getting Started
Prerequisites

Make sure you have:

Node.js
npm
Git
Installation

Clone the repository:

git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git


Navigate to the project:

cd JAXLAssignment


Install dependencies:

npm install


Start the development server:

npm run dev


Open the local development URL shown in your terminal.

📦 Production Build

Create a production build:

npm run build


Preview the production build:

npm run preview

📊 Requirement Checklist
Requirement	Implementation
Shopify provider	✅
Shiprocket provider	✅
NimbusPost provider	✅
Common data model	✅
Shared timeline component	✅
Chronological sorting	✅
Duplicate removal	✅
Timestamp normalization	✅
Unknown status handling	✅
Missing description handling	✅
Responsive layout	✅
Status visualization	✅
Loading / empty state	✅
📸 Screenshots

Add screenshots of your finished application here.

Desktop
📷 Add desktop screenshot here

Mobile
📱 Add mobile screenshot here

Provider Switching
🔄 Add provider switching screenshot here

💡 Key Design Decision

The most important architectural decision in this project is separating provider-specific data handling from the UI.

Instead of:

Shopify → Shopify Timeline
Shiprocket → Shiprocket Timeline
NimbusPost → NimbusPost Timeline


the application follows:

Shopify ────────┐
Shiprocket ─────┼──→ Normalized Events → Shared Timeline
NimbusPost ─────┘


This makes the application easier to maintain and allows additional shipping providers to be added without creating another timeline UI.

🔮 Possible Improvements

If this were extended beyond the assignment, some potential improvements would be:

Add real API integrations
Add unit tests for normalization functions
Add automated integration tests
Add loading skeleton animations
Add dark mode
Add subtle provider-switch transitions
Add shipment search
Add estimated delivery date
Add error handling for failed provider requests
👨‍💻 Author
Your Name

Frontend Developer

Built as part of the JAXL Frontend Assignment.

<div align="center">
📦 Built with React · Tailwind CSS · Lucide React

Shipment data may be inconsistent.
The customer experience shouldn't be.

</div>