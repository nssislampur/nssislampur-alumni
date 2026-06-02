# NSS High School Alumni - 1997 Batch (Class 10)

Welcome to the official website of NSS High School's 1997 batch alumni network.

## 🎓 About Us
This is a dedicated space for alumni from the 1997 batch (Class 10) of NSS High School to reconnect, share memories, and stay updated with fellow classmates.

## 📋 Features
- **Alumni Directory** - Connect with your batch mates, find contact information
- **Photo Gallery** - Share and view memories from school days and alumni events
- **School Photo** - Featured photo of NSS High School
- **Emergency Help Numbers** - Quick access to important contact information
- **Updates & News** - Latest news from the school and batch
- **Events** - Organize and share alumni reunions

## 📁 Project Structure
```
nssislampur-alumni/
├── index.html                  # Main homepage
├── alumni-directory.html       # Alumni list and profiles
├── gallery.html                # Photo gallery
├── emergency-contacts.html     # Emergency help numbers
├── css/
│   └── style.css              # Main stylesheet
├── js/
│   ├── script.js              # Global JavaScript
│   ├── alumni-directory.js    # Alumni directory functionality
│   └── gallery.js             # Gallery functionality
├── data/
│   ├── alumni.json            # Alumni database
│   └── contacts.json          # Emergency contacts database
├── images/
│   ├── school/
│   │   └── school-main.jpg    # School photo
│   └── alumni/                # Alumni photos directory
└── README.md                  # This file
```

## 🚀 Getting Started

1. **Clone or Download the repository**
   ```bash
   git clone https://github.com/nssislampur/nssislampur-alumni.git
   cd nssislampur-alumni
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or set up a local server (recommended for photo uploads)

3. **Customize with your information**
   - Update `data/alumni.json` with batch member details
   - Update `data/contacts.json` with school and emergency contacts
   - Add school photo to `images/school/school-main.jpg`

4. **Add Photos**
   - School photos: Place in `images/school/` folder
   - Alumni photos: Upload via the gallery page
   - Photos can also be manually placed in `images/alumni/` folder

## 📸 Adding Alumni Photos

### Via Website (Recommended)
1. Go to the **Gallery** page
2. Click the **"Share Your Alumni Photos"** section
3. Click or drag-and-drop photos
4. Supported formats: JPG, PNG, GIF (up to 5MB each)

### Via File Upload
1. Add photos to the `images/alumni/` folder
2. Photos will display automatically in the gallery

## 📞 Emergency Contacts

The website includes sections for:
- National Emergency Services (Police, Ambulance, Fire)
- School Contact Information
- Alumni Coordinator Details
- Local Emergency Services

Update these in `emergency-contacts.html` with your local information.

## 👥 Alumni Directory

### Adding Alumni
1. Edit `data/alumni.json`
2. Add new alumni objects with:
   - Name
   - Profession
   - Location
   - Email
   - Phone
   - Bio/Description

Example:
```json
{
  "id": 7,
  "name": "John Doe",
  "profession": "Engineer",
  "location": "Bangalore",
  "email": "john@example.com",
  "phone": "+91 98765 43210",
  "avatar": "👨",
  "bio": "Software Engineer at Tech Company"
}
```

## 🎨 Customization

### Colors
Edit `:root` CSS variables in `css/style.css`:
```css
--primary-color: #2c3e50;
--secondary-color: #3498db;
--accent-color: #e74c3c;
```

### Contact Information
Update `emergency-contacts.html` with:
- School phone number
- Principal contact
- School address
- Alumni coordinator details
- Local emergency services numbers

## 🤝 Contributing

Alumni can contribute by:
- Adding their profile information to the directory
- Uploading batch and event photos
- Sharing updates and stories
- Updating emergency contact information
- Organizing reunions

## 📧 Contact & Support

For more information, please reach out to the alumni coordinator or create an issue on GitHub.

## 🔒 Privacy & Security

- Personal contact information is displayed at contributor's discretion
- Only alumni from the batch should be added to the directory
- Inappropriate photos will be removed
- Ensure you have permission before sharing photos of others

## 📄 License

This project is open source and available for educational purposes.

---

**Batch Information:**
- **Batch Year:** 1997
- **Class:** 10
- **School:** NSS High School
- **Last Updated:** June 2025

**Connect with your batch mates and preserve memories! 🎓✨**
