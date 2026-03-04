# 🎉 Interactive Birthday Website

A beautiful, interactive birthday experience with visual novel-style storytelling!

## 📁 Project Structure

```
your-project/
│
├── index.html          # Main HTML file
├── style.css           # All styling and animations
├── script.js           # Interactive logic
│
├── images/             # Create this folder
│   ├── photo1.jpg      # Birthday person's photo 1
│   ├── photo2.jpg      # Birthday person's photo 2
│   └── photo3.jpg      # Birthday person's photo 3
│
└── audio/              # Create this folder
    └── birthday-music.mp3  # Background music
```

## 🎨 Assets You Need to Add

### 1. **Photos (3 images)**

- Place 3 photos of the birthday person in the `images/` folder
- Name them: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`
- Recommended size: 1920x1080 or any HD resolution
- Format: JPG or PNG

**Where to get them:**

- Use your own photos from your phone/computer
- Make sure they're good quality and appropriate for the slideshow

### 2. **Background Music (1 audio file)**

- Place a birthday music file in the `audio/` folder
- Name it: `birthday-music.mp3`
- Format: MP3 (for best browser compatibility)

**Free music sources:**

- **YouTube Audio Library**: https://www.youtube.com/audiolibrary
  - Filter by "Mood: Happy" or search "birthday"
  - Download as MP3
- **Free Music Archive**: https://freemusicarchive.org/
  - Search for "birthday" or "celebration"
  - Make sure it's CC0 or royalty-free
- **Pixabay Music**: https://pixabay.com/music/
  - Search "happy birthday" or "celebration"
  - All music is free to use

- **Incompetech**: https://incompetech.com/music/royalty-free/
  - Genre: "Happy" or "Bright"
  - Great instrumental tracks

**Recommended tracks to search:**

- "Happy Birthday" (instrumental versions)
- "Birthday Party" background music
- "Celebration" upbeat music
- "Happy Upbeat" instrumental

### 3. **Happy Birthday Banner (PNG image)**

- Download a "Happy Birthday" banner/garland image
- Name it: `banner.png`
- Place in the `images/` folder
- **See [ASSETS_GUIDE.md](ASSETS_GUIDE.md) for download sources!**

**Note:** A placeholder SVG is included, but replace it with a real PNG for best results!

### 4. **Birthday Cake (PNG image)**

- Download a birthday cake image (with candles)
- Name it: `cake.png`
- Place in the `images/` folder
- **See [ASSETS_GUIDE.md](ASSETS_GUIDE.md) for download sources!**

**Note:** A placeholder SVG is included, but replace it with a real PNG for best results!

**👉 IMPORTANT:** Check the [ASSETS_GUIDE.md](ASSETS_GUIDE.md) file for detailed instructions on where to download these assets for FREE!

## ✏️ Customization

### Edit the Birthday Message

Open `script.js` and find the `showLetter()` function (around line 115). Replace the message with your own:

```javascript
const message = `Dear [Her Name],

[Your personalized message here...]

Love,
[Your Name]`;
```

### Change Colors

Edit `style.css` to change the color scheme:

- Line 121-122: Landing page button colors
- Line 185-186: VN button colors
- Line 443: Balloon colors

## 🚀 Testing Locally

### Option 1: Simple Python Server (if you have Python)

```bash
cd path/to/your/project
python -m http.server 8000
```

Then open: http://localhost:8000

### Option 2: VS Code Live Server

1. Install "Live Server" extension in VS Code
2. Right-click `index.html`
3. Select "Open with Live Server"

### Option 3: Just open the file

- Simply double-click `index.html` (music might not work in some browsers)

## 📤 Deployment to 12march.rocks

Since you already have the domain from name.com, here are your deployment options:

### Option 1: GitHub Pages (Easiest & Free)

1. **Create a GitHub account** (if you don't have one): https://github.com

2. **Create a new repository:**
   - Click "New Repository"
   - Name it: `birthday-website` (or anything)
   - Make it Public
   - Don't initialize with README

3. **Upload your files:**
   - Click "uploading an existing file"
   - Drag and drop ALL your files (keeping folder structure)
   - Commit the changes

4. **Enable GitHub Pages:**
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: main → /root
   - Save

5. **Get your GitHub Pages URL:**
   - It will be: `https://your-username.github.io/birthday-website/`

6. **Point your domain to GitHub Pages:**
   - Go to name.com dashboard
   - Find DNS settings for 12march.rocks
   - Add these DNS records:
     ```
     Type: A     Name: @     Value: 185.199.108.153
     Type: A     Name: @     Value: 185.199.109.153
     Type: A     Name: @     Value: 185.199.110.153
     Type: A     Name: @     Value: 185.199.111.153
     Type: CNAME Name: www   Value: your-username.github.io
     ```

7. **Configure custom domain in GitHub:**
   - Go to your repo → Settings → Pages
   - Custom domain: `12march.rocks`
   - Save

8. **Wait 24-48 hours** for DNS to propagate

### Option 2: Netlify (Also Easy & Free)

1. **Go to Netlify**: https://www.netlify.com
2. **Sign up** (free account)
3. **Drag and drop your entire project folder** into Netlify
4. **Get your Netlify URL**: something like `birthday-xyz.netlify.app`
5. **Set up custom domain:**
   - In Netlify: Site settings → Domain management
   - Add custom domain: `12march.rocks`
   - Follow Netlify's DNS instructions
   - Update name.com DNS settings as instructed

### Option 3: Vercel (Fast & Free)

1. **Go to Vercel**: https://vercel.com
2. **Sign up** with GitHub
3. **Import your repository** or drag and drop files
4. **Deploy**
5. **Add custom domain** in project settings

### Option 4: Traditional Web Hosting

If name.com provides web hosting:

1. Use their file manager or FTP
2. Upload all files to the public_html or www folder
3. Your site will be automatically available at 12march.rocks

## 🎭 Scene Flow

1. **Landing Page**: Slideshow with Enter button
2. **Darkness**: "Dark, isn't it?" → Turn on lights
3. **Lit Room**: "What's a party without music?" → Start music
4. **Decoration**: Balloons and banner appear
5. **Letter**: Your personalized message with typing effect
6. **Cake Time**: Table with cake and burning candle
7. **Make a Wish**: Funny prompt
8. **Blow Candle**: Candle animation goes off
9. **Cut Cake**: Transition to final scene
10. **Final Celebration**: Confetti, hearts, and birthday wishes

## ⚙️ Browser Compatibility

Works best on:

- Chrome (recommended)
- Firefox
- Safari
- Edge

Note: Music autoplay might be blocked in some browsers. Users might need to interact with the page first.

## 🐛 Troubleshooting

**Music not playing:**

- Some browsers block autoplay. The user needs to click the button.
- Make sure the file is named exactly `birthday-music.mp3`
- Check browser console for errors (F12)

**Images not showing:**

- Verify file names match exactly: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`
- Check that images are in the `images/` folder
- Try different image formats (PNG instead of JPG)

**Animations not smooth:**

- Try on a different browser
- Close other tabs to free up resources

## 💝 Final Touches

Before the big reveal:

1. ✅ Replace all 3 photos in `images/` folder
2. ✅ Add birthday music in `audio/` folder
3. ✅ Customize the birthday message in `script.js`
4. ✅ Test the entire experience locally
5. ✅ Deploy to 12march.rocks
6. ✅ Test the live website
7. ✅ Share the link on her birthday!

## 📝 Birthday Message Ideas

If you need inspiration for the letter:

```
- Thank her for specific memories
- Mention inside jokes
- Express what her friendship means
- Wish for her future
- Keep it heartfelt and genuine
- Add some humor!
```

## 🎊 Good Luck!

This is such a thoughtful gift! She's going to love it. 💝

---

**Need help?** Let me know if you encounter any issues!
