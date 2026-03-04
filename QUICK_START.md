# 🚀 QUICK START GUIDE

## Step 1: Add Your Assets

### Add Photos (Required)

1. Go to the `images/` folder
2. Add 3 photos of the birthday person
3. Name them exactly:
   - `photo1.jpg`
   - `photo2.jpg`
   - `photo3.jpg`

### Add Music (Required)

1. Go to the `audio/` folder
2. Download a birthday song from:
   - YouTube Audio Library: https://www.youtube.com/audiolibrary
   - Pixabay Music: https://pixabay.com/music/
3. Name it exactly: `birthday-music.mp3`

### Add Banner & Cake Images (Required)

1. **Read the [ASSETS_GUIDE.md](ASSETS_GUIDE.md) file!**
2. Download:
   - `banner.png` - Happy Birthday hanging banner
   - `cake.png` - Birthday cake with candles
3. Place both in the `images/` folder

**Note:** Placeholder SVGs are included, but the site will look MUCH better with real PNGs!

## Step 2: Customize the Message

1. Open `script.js` in any text editor
2. Find line ~115 (the `showLetter()` function)
3. Replace the message between the backticks with your personal message
4. Save the file

## Step 3: Test Locally

**Option A: Simple Test**

- Just double-click `index.html`

**Option B: With Python**

```bash
cd e:\Project\k
python -m http.server 8000
```

Then visit: http://localhost:8000

**Option C: VS Code Live Server**

- Install "Live Server" extension
- Right-click `index.html` → "Open with Live Server"

## Step 4: Deploy to 12march.rocks

### Easiest Method: Netlify

1. Go to https://app.netlify.com/drop
2. Drag and drop your entire project folder
3. Wait for deployment
4. In Netlify dashboard:
   - Go to "Domain settings"
   - Click "Add custom domain"
   - Enter: `12march.rocks`
5. Netlify will show you DNS settings
6. Go to name.com:
   - Find DNS settings for 12march.rocks
   - Update DNS records as shown by Netlify
7. Wait 24-48 hours for DNS propagation

### Alternative: GitHub Pages

1. Create GitHub account: https://github.com
2. Create new repository (public)
3. Upload all files
4. Enable Pages in Settings
5. Add custom domain: `12march.rocks`
6. Update DNS at name.com:
   ```
   A Record: @ → 185.199.108.153
   A Record: @ → 185.199.109.153
   A Record: @ → 185.199.110.153
   A Record: @ → 185.199.111.153
   CNAME: www → your-username.github.io
   ```

## ✅ Checklist Before Launch

- [ ] Added 3 photos to `images/` folder
- [ ] Downloaded and added `banner.png` (see ASSETS_GUIDE.md)
- [ ] Downloaded and added `cake.png` (see ASSETS_GUIDE.md)
- [ ] Added birthday music to `audio/` folder
- [ ] Customized the birthday message in `script.js`
- [ ] Tested the website locally (all scenes work)
- [ ] Deployed to hosting service
- [ ] Connected 12march.rocks domain
- [ ] Tested the live website
- [ ] Ready to share! 🎉

## 🎭 Scene Order

1. Landing (slideshow) → Enter
2. Dark screen → Turn on lights
3. Pink background → Start music
4. Decorations → Balloons & banner appear
5. Letter → Your message
6. Cake → With burning candle
7. Wish → Make it!
8. Blow candle → Poof!
9. Cut cake → Confetti time!
10. Final celebration → Hearts & wishes

## 🆘 Quick Fixes

**Music not playing or downloading instead of playing?**

- Check file name: must be `birthday-music.mp3`
- The music is now set to preload automatically
- Make sure you're testing on a web server (not just opening the file)
  - Use Python: `python -m http.server 8000`
  - Or VS Code Live Server extension
- Some browsers block autoplay - if music doesn't start, click anywhere on the page
- Try clearing browser cache (Ctrl + F5)

**Images not showing?**

- Check file names: `photo1.jpg`, `photo2.jpg`, `photo3.jpg`
- Make sure they're in the `images/` folder

**Website looks weird?**

- Try Chrome or Firefox
- Clear cache (Ctrl + F5)

## 📅 Timeline

- **March 4 (Today)**: Setup and customization
- **March 5-10**: Deploy and test
- **March 11**: Final check
- **March 12**: 🎉 THE BIG DAY! 🎉

---

**You've got 8 days - plenty of time!** Take it step by step and it'll be amazing! 💝
