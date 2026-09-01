JAXL Frontend Assignment
Shipment Tracking Timeline

A responsive shipment tracking interface built with React, Tailwind CSS, and Lucide React.

The application normalizes tracking information from three different shipping providers into a single internal data format and renders all providers using the same reusable shipment timeline component.

🚀 Live Demo

Add your deployed application URL here.

Live Demo: https://your-deployed-app-url.com

📌 Overview

JAXL integrates with multiple shipping and logistics providers, where each provider returns shipment tracking information in a different format.

This project solves that problem by:

Supporting all three sample providers.
Converting provider-specific data into a common internal format.
Sorting shipment events chronologically.
Removing duplicate events.
Formatting different timestamp formats into a readable date and time.
Handling unknown shipment statuses gracefully.
Handling missing event descriptions safely.
Rendering all normalized data through one shared timeline component.
Providing a responsive and visually consistent UI.
✨ Features
Shipment Providers

The application supports:

Shopify
Shiprocket
NimbusPost

Users can switch between providers through the UI and view the corresponding shipment history.

Data Normalization

Each provider has a different API structure:

Provider	Status Field	Timestamp Format	Description
Shopify	status	ISO 8601	message
Shiprocket	current_status	DD-MM-YYYY HH:mm:ss	Not provided
NimbusPost	event_status	Unix timestamp	Not provided

Provider-specific data is converted into a common format before being passed to the timeline.

Example internal structure:

{
  status: "in_transit",
  timestamp: "2026-07-20T19:45:00Z",
  description: "Package is in transit"
}

🧩 Architecture

The application follows a simple normalization-based architecture:

Provider JSON
     ↓
Provider-specific normalizer
     ↓
Common shipment event format
     ↓
Sort & remove duplicates
     ↓
Shared Timeline Component
     ↓
User Interface


This allows all three providers to use the same timeline implementation instead of maintaining separate UI components for each provider.

📂 Project Structure
JAXLAssignment/
├── public/
├── src/
│   ├── components/
│   │   └── ShipmentTimeline/
│   ├── data/
│   │   ├── sample-shopify.json
│   │   ├── sample-shiprocket.json
│   │   └── sample-nimbuspost.json
│   ├── utils/
│   │   └── normalization/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md


The exact folder structure may vary depending on the implementation.

🔄 Data Normalization

The three providers return different field names and timestamp formats.

Shopify
{
  "status": "delivered",
  "timestamp": "2026-07-22T14:32:00Z",
  "message": "Package delivered"
}

Shiprocket
{
  "current_status": "DELIVERED",
  "status_date": "21-07-2026 16:05:00"
}

NimbusPost
{
  "event_status": "RTO_INITIATED",
  "event_time": 1721520000
}


The application transforms these into a consistent structure before rendering:

{
  status,
  timestamp,
  description
}


This keeps the UI independent of the provider's original API format.

🧹 Data Handling

The application handles the following cases:

Chronological Ordering

Events are sorted from oldest → newest, regardless of their order in the original provider response.

Duplicate Events

Duplicate events are removed when they have the same:

status + timestamp


For example, the duplicate Shiprocket IN_TRANSIT event is displayed only once.

Missing Descriptions

Events without a description are rendered cleanly without displaying values such as:

undefined
null

Unknown Statuses

Unexpected statuses are handled gracefully using a generic status style and icon rather than causing the application to crash.

For example:

RTO_INITIATED


is supported even though it is not present in the other provider datasets.

🎨 UI & UX

The interface was designed with a focus on:

Clear visual hierarchy
Consistent spacing
Readable typography
Status-specific colors
Icons for shipment states
Clear timeline progression
Responsive desktop and mobile layouts
Clean empty/loading states
Easy provider switching
Status Visualization

Shipment statuses are visually differentiated using Lucide React icons, colors, and status indicators.

Examples include:

Package
Package Check
Truck
Map Pin
Check Circle
Return/Refresh
Help Circle for unknown statuses
📱 Responsive Design

The application is built using Tailwind CSS and is designed to work across:

Desktop
Tablet
Mobile

The timeline layout adapts to smaller screen sizes while maintaining readable status, timestamp, and description information.

🛠️ Tech Stack
Frontend
React
JavaScript
Tailwind CSS
Lucide React
Vite
Development
Git
GitHub
npm
⚙️ Getting Started
Prerequisites

Make sure you have installed:

Node.js
npm
Git
Installation

Clone the repository:

git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git


Navigate into the project:

cd JAXLAssignment


Install dependencies:

npm install


Start the development server:

npm run dev


The application will be available at the local URL shown in your terminal, typically:

http://localhost:5173

📦 Build for Production

Create a production build:

npm run build


Preview the production build:

npm run preview

🧪 Sample Data

The project includes three sample tracking datasets:

sample-shopify.json
sample-shiprocket.json
sample-nimbuspost.json


These datasets intentionally demonstrate different real-world data challenges, including:

Different property names
Different timestamp formats
Events in different orders
Duplicate events
Missing descriptions
Provider-specific statuses
📋 Assignment Requirements Covered
Requirement	Status
Support Shopify	✅
Support Shiprocket	✅
Support NimbusPost	✅
Single shared timeline	✅
Normalize provider data	✅
Chronological ordering	✅
Duplicate removal	✅
Readable timestamps	✅
Unknown status handling	✅
Missing description handling	✅
Responsive UI	✅
Visual status indicators	✅
Loading/empty state	✅
📸 Screenshots

Add screenshots of your application here.

Example:

screenshots/
├── desktop.png
├── mobile.png
└── provider-switching.png

👨‍💻 Author

Your Name

Frontend Assignment — JAXL

GitHub: https://github.com/YOUR_USERNAME