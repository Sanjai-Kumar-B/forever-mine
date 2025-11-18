# 📋 AlwaysBeMine - Complete Customization Guide

This document lists **every customizable element** in your Valentine's Day proposal app. Check the items you want to change and let me know!

---

## 🎨 1. BACKGROUNDS & COLORS

### Main Background
- **Current**: `rgba(192, 200, 255, 0.97)` (light lavender/blue - 97% opacity)
- **Location**: `src/App.jsx` line ~308 (Spline container)
- **Also in**: `src/index.css` (body background)
- [ ] Change background color
- [ ] Change opacity
- [ ] Use gradient instead of solid color
- [ ] Use background image instead (bg1.webp or bg2.webp available)

### Spline 3D Scene
- **Current**: `https://prod.spline.design/oSxVDduGPlsuUIvT/scene.splinecode`
- **Alternative available**: `https://prod.spline.design/ZU2qkrU9Eyt1PHBx/scene.splinecode` (commented out)
- [ ] Switch to alternative Spline scene
- [ ] Use different Spline scene URL
- [ ] Remove Spline background entirely

### Popup Backgrounds
- **Image**: `Lovingbg2_main.jpg` (used in all SweetAlert popups)
- [ ] Change popup background image

---

## 📝 2. TEXT CONTENT

### Main Question
**Current**: `"Will you be my Valentine?"`
- **Location**: `src/App.jsx` line ~322
- [ ] Change main question text

### Success Messages (after "Yes")
**Current**:
- `"I Love You !!!"`
- `"You're the love of my life."`
- **Location**: `src/App.jsx` lines ~315-316
- [ ] Change success heading
- [ ] Change success subtitle

### "No" Button Progressive Phrases (25 total)
**Location**: `src/App.jsx` function `getNoButtonText()` lines ~232-258

1. [ ] "No"
2. [ ] "Are you sure?"
3. [ ] "Really sure?"
4. [ ] "Think again!"
5. [ ] "Last chance!"
6. [ ] "Surely not?"
7. [ ] "You might regret this!"
8. [ ] "Give it another thought!"
9. [ ] "Are you absolutely certain?"
10. [ ] "This could be a mistake!"
11. [ ] "U Have a heart!💕"
12. [ ] "Don't be so cold!"
13. [ ] "Wouldn't you reconsider?"
14. [ ] "Is that your final answer?"
15. [ ] "You're breaking my heart ;("
16. [ ] "But... why? 😢"
17. [ ] "Please, pretty please? 💖"
18. [ ] "I can't take this! 😫"
19. [ ] "Are you sure you want to do this to me? 😢"
20. [ ] "You're gonna hurt my feelings! 😥"
21. [ ] "I need you to reconsider, like now! 😓"
22. [ ] "I believe in you, don't disappoint me! 💔"
23. [ ] "My heart says yes, what about yours? ❤️"
24. [ ] "Don't leave me hanging! 😬"
25. [ ] "Plsss? :( You're breaking my heart 💔"

### Popup Messages (SweetAlert2)

#### Early "Yes" Popup (clicked before 4 "No" clicks)
**Current**: `"I love you sooo Much!!!❤️, You've stolen my heart completely!!! 🥰💖 But itni pyaari ladki aur itni jaldi haan? Thoda aur nakhre karke mujhe tarpaao na! 🥰✨"`
- **Location**: `src/App.jsx` line ~263
- [ ] Change early "Yes" popup message

#### Final "Yes" Popup (clicked after 4+ "No" clicks)
**Current**: `"I love you so much!! ❤️ You are my everything, my joy, my forever. Every moment with you is a memory I'll cherish forever, and my heart beats only for you.</br> Will you be the love of my life forever?"`
- **Location**: `src/App.jsx` line ~279
- [ ] Change final "Yes" popup message

#### 25th "No" Click Popup
**Current**: `"My love for you is endless, like the stars in the sky—shining for you every night, even if you don't always notice. 🌟 I'll wait patiently, proving every day that you're my everything. ❤️ Please press 'Yes' and let's make this a forever story. 🥰✨<br/>'True love never gives up; it grows stronger with time.'"`
- **Location**: `src/App.jsx` line ~293
- [ ] Change 25th "No" popup message

### Marquee Romantic Sentences (13 total, rotate every 9 seconds)
**Location**: `src/MarqueeProposal.jsx` lines ~6-19

1. [ ] "You light up my world like no one else."
2. [ ] "Every moment with you feels like magic."
3. [ ] "My world begins and ends with you in it."
4. [ ] "You're the reason my heart beats faster."
5. [ ] "Life feels complete when you're around."
6. [ ] "I can't imagine my future without you."
7. [ ] "You're my sunshine on the darkest days."
8. [ ] "With you, every day is a blessing."
9. [ ] "You're the missing piece that completes my heart."
10. [ ] "You make even ordinary moments feel extraordinary."
11. [ ] "You make my world brighter and happier."
12. [ ] "You're the dream I never want to wake up from."
13. [ ] "Will you be the love of my life forever?"

### Footer
**Current**: `"Made with ❤️ by Ujjwal"`
- **Link**: `https://github.com/UjjwalSaini07`
- **Location**: `src/App.jsx` lines ~346-356
- [ ] Change footer text
- [ ] Change footer link

---

## 🖼️ 3. IMAGES & GIFs

### Static SVG Images
- **Top-left decoration**: `All You Need Is Love SVG Cut File.svg`
- **Alternative available**: `Love In The Air SVG Cut File.svg` (not currently used)
- [ ] Change top-left SVG decoration
- [ ] Remove SVG decoration

### Main Display GIF (default state, before any clicks)
- **Current**: `main_temp.gif`
- **Location**: `src/App.jsx` line ~49
- [ ] Replace default center GIF

### "Yes" Response GIFs (12 total, cycle every 5 seconds)
**Location**: `src/App.jsx` lines ~17-28

1. [ ] `lovecutie0.gif` (yesgif0)
2. [ ] `love2.gif` (yesgif1)
3. [ ] `love3.gif` (yesgif2)
4. [ ] `love1.gif` (yesgif3)
5. [ ] `lovecutie1.gif` (yesgif4)
6. [ ] `lovecutie5.gif` (yesgif5)
7. [ ] `lovecutie7.gif` (yesgif6)
8. [ ] `lovecutie8.gif` (yesgif7)
9. [ ] `lovecutie3.gif` (yesgif8)
10. [ ] `lovecutie9.gif` (yesgif9)
11. [ ] `lovecutie6.gif` (yesgif10)
12. [ ] `lovecutie4.gif` (yesgif11)

### "No" Response GIFs (10 total, cycle with each "No" click)
**Location**: `src/App.jsx` lines ~30-39

1. [ ] `breakRej0.gif` (nogif0)
2. [ ] `breakRej0_1.gif` (nogif0_1)
3. [ ] `breakRej1.gif` (nogif1)
4. [ ] `breakRej2.gif` (nogif2)
5. [ ] `breakRej3.gif` (nogif3)
6. [ ] `breakRej4.gif` (nogif4)
7. [ ] `breakRej5.gif` (nogif5)
8. [ ] `breakRej6.gif` (nogif6)
9. [ ] `RejectNo.gif` (nogif7)
10. [ ] `breakRej7.gif` (nogif8)

### Floating Hover GIFs
- **Hearts** (hover "Yes" button): `happy.gif`
- **Sad faces** (hover "No" button): `sad.gif`
- [ ] Replace floating heart GIF
- [ ] Replace floating sad GIF

### Popup Backdrop GIFs
- **Early "Yes" popup**: `cutieSwal4.gif` (right side backdrop)
- **Final "Yes" popup**: `RoseCute.gif` (right side backdrop)
- **25th "No" popup**: `breakRej1.gif` (right side backdrop)
- [ ] Change early "Yes" popup backdrop GIF
- [ ] Change final "Yes" popup backdrop GIF
- [ ] Change 25th "No" popup backdrop GIF

---

## 🎵 4. AUDIO / MUSIC

### "Yes" Music Playlist (4 songs, loop continuously)
**Location**: `src/App.jsx` lines ~42-45

1. [ ] `Love_LoveMeLikeYouDo.mp3` (yesmusic1)
2. [ ] `Love_Nadaaniyan.mp3` (yesmusic3)
3. [ ] `Love_JoTumMereHo.mp3` (yesmusic4)
4. [ ] `Love_EDPerfect.mp3` (yesmusic2)

### "No" Music Playlist (5 songs, plays every 7 "No" clicks, loops)
**Location**: `src/App.jsx` lines ~47-51

1. [ ] `Rejection_WeDontTalkAnyMore.mp3` (nomusic1)
2. [ ] `Rejection_LoseYouToLoveMe.mp3` (nomusic2)
3. [ ] `Reject_withoutMe.mp3` (nomusic3)
4. [ ] `Neutral_Base_IHateU.mp3` (nomusic4)
5. [ ] `Reject1_TooGood.mp3` (nomusic5)

### Unused Audio Files (available to add)
- [ ] `Love_TheWalters.mp3`
- [ ] `Love_UntilIFoundYou.mp3`
- [ ] `Rejection_DieWithASmile.mp3`

---

## ⚙️ 5. INTERACTIVE FEATURES & BEHAVIORS

### Button Behaviors

#### "Yes" Button
- **Growth rate**: `noCount * 16 + 16px` (gets bigger with each "No")
- **Hover effect**: Spawns 10 floating heart GIFs
- [ ] Change button growth rate/formula
- [ ] Change number of floating hearts (currently 10)
- [ ] Disable floating hearts on hover

#### "No" Button
- **Hover effect**: Spawns 10 floating sad GIFs
- [ ] Change number of floating sad GIFs (currently 10)
- [ ] Disable floating sad faces on hover

### Mouse Cursor Stealer Feature
- **Activates**: After 16 "No" clicks and before 25th "No" click
- **Duration**: Steals cursor for 8 seconds
- **Component**: `src/MouseStealer.jsx`
- [ ] Change activation threshold (currently 16-24 "No" clicks)
- [ ] Change steal duration (currently 8 seconds)
- [ ] Disable mouse stealer feature entirely

### Mute/Unmute Toggle
- **Location**: Fixed bottom-right corner (above footer)
- **Icons**: Volume up/mute icons from react-icons
- [ ] Change mute button position
- [ ] Change mute button styling

---

## 🎨 6. STYLING & DESIGN

### Button Colors
- **"Yes" button**: `bg-green-500` → `bg-green-600` (hover)
- **"No" button**: `bg-rose-500` → `bg-rose-600` (hover)
- **Mute button**: `bg-gray-200` → `bg-gray-300` (hover)
- [ ] Change "Yes" button color
- [ ] Change "No" button color
- [ ] Change mute button color

### Fonts
- **Main headings**: `"Protest Riot"` (Google Font) - used for main question
- **"I Love You" text**: `"Charm, serif"` weight 700
- **"You're the love of my life"**: `"Beau Rivage, serif"` weight 500
- **Marquee text**: `"Charm, serif"` weight 700
- [ ] Change main heading font
- [ ] Change success message fonts
- [ ] Change marquee font

### Animations & Timing
- **GIF rotation speed** (success state): 5000ms (5 seconds)
- **Marquee sentence rotation**: 9000ms (9 seconds)
- **Floating GIF animation**: 3s ease-in-out bounce
- **Marquee scroll speed**: 10s linear
- [ ] Change "Yes" GIF rotation speed
- [ ] Change marquee sentence rotation speed
- [ ] Change marquee scroll speed
- [ ] Change floating GIF animation speed

### Text Sizes
- **Main question**: `text-4xl md:text-6xl` (Tailwind responsive)
- **Success heading**: `text-4xl md:text-6xl`
- **Success subtitle**: `text-4xl md:text-4xl`
- [ ] Change main question font size
- [ ] Change success message font sizes

---

## 🔢 7. LOGIC & THRESHOLDS

### State Triggers (customize when features activate)
- **noCount = 1**: First "No" music starts
- **noCount >= 4**: "No" GIFs cycle, "Yes" enables full success mode
- **noCount > 16 && < 25**: Mouse stealer activates
- **noCount = 25**: Special "endless love" popup
- **Every 7 clicks**: New rejection song plays
- [ ] Change threshold for GIF cycling (currently 4)
- [ ] Change mouse stealer activation range (currently 16-24)
- [ ] Change special popup trigger (currently 25)
- [ ] Change music trigger frequency (currently every 7)

### Marquee Component
- **Shown**: Only when "Yes" clicked after 4+ "No" clicks
- [ ] Show marquee in default state too
- [ ] Disable marquee entirely

---

## 🎯 QUICK CUSTOMIZATION CATEGORIES

### 🌟 Essential Changes (Most Common)
- [ ] Main question text
- [ ] Success messages
- [ ] Footer credit/link
- [ ] Background color
- [ ] Replace main GIF
- [ ] Replace "Yes" GIFs
- [ ] Replace music tracks

### 💬 Text Personality
- [ ] All "No" button phrases
- [ ] All popup messages
- [ ] All marquee sentences

### 🎨 Visual Theme
- [ ] Background color/image
- [ ] Button colors
- [ ] Fonts
- [ ] All GIFs
- [ ] Spline 3D scene

### 🎵 Audio Experience
- [ ] "Yes" playlist
- [ ] "No" playlist
- [ ] Add unused songs

### ⚡ Behavior Tuning
- [ ] Click thresholds
- [ ] Animation speeds
- [ ] Button growth rate
- [ ] Feature toggles (mouse stealer, floating GIFs, etc.)

---

## 📂 FILE REFERENCE

### Main Files
- **`src/App.jsx`**: Core logic, text, button behaviors, popups
- **`src/MarqueeProposal.jsx`**: Scrolling romantic sentences
- **`src/MouseStealer.jsx`**: Cursor stealing feature
- **`src/index.css`**: Global styles, body background, animations
- **`tailwind.config.js`**: Tailwind CSS configuration

### Asset Folders
- **`src/assets/`**: SVGs, background images
- **`src/assets/GifData/Yes/`**: 12 success GIFs
- **`src/assets/GifData/No/`**: 10 rejection GIFs
- **`src/assets/GifData/`**: Floating GIFs, popup backdrops, main GIF
- **`src/assets/AudioTracks/`**: 12 music files (4 love, 5 rejection, 3 unused)

---

## ✅ HOW TO USE THIS GUIDE

1. **Check the boxes** for items you want to change
2. **Note specific changes** next to each item (or separately)
3. **Share your list** with me
4. I'll make all the changes in one batch

**Example**:
```
[x] Change main question text → "Will you marry me?"
[x] Change background color → soft pink (#FFE5E5)
[x] Replace "Yes" GIFs → (I'll provide new GIF files)
[x] Change footer text → "Made with love by [Your Name]"
```

---

Ready when you are! Just let me know which items you want to customize. 🎉
