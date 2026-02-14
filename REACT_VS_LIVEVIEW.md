# React vs Phoenix LiveView: Code Comparison

## Side-by-Side Component Examples

### 1. Hero Component

**React (Original):**
```jsx
const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen pt-32">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h1 className="font-display text-7xl">
          Get <span className="text-lime-400">Yoked.</span>
        </h1>
      </motion.div>
    </section>
  );
};
```

**Phoenix LiveView (This Version):**
```elixir
def hero(assigns) do
  ~H"""
  <section class="relative min-h-screen pt-32">
    <div class="fade-in-up">
      <h1 class="font-display text-7xl">
        Get <span class="text-lime-400">Yoked.</span>
      </h1>
    </div>
  </section>
  """
end
```

### 2. State Management

**React:**
```jsx
const [activeIndex, setActiveIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  }, 4000);
  return () => clearInterval(interval);
}, []);
```

**Phoenix LiveView:**
```javascript
// In hooks.js (client-side only for DOM manipulation)
this.interval = setInterval(() => {
  this.activeIndex = (this.activeIndex + 1) % this.screenshots.length;
  this.updateCarousel();
}, 4000);
```

### 3. Event Handlers

**React:**
```jsx
<button onClick={() => setIsOpen(!isOpen)}>
  Toggle Menu
</button>
```

**Phoenix LiveView:**
```elixir
<button phx-hook="MobileMenu">
  Toggle Menu
</button>

# In hooks.js:
this.el.addEventListener('click', () => {
  // Handle toggle
});
```

### 4. Conditional Rendering

**React:**
```jsx
{features.map((feature, idx) => (
  <FeatureCard key={idx} feature={feature} />
))}
```

**Phoenix LiveView:**
```elixir
<%= for {feature, idx} <- Enum.with_index(@features) do %>
  <.feature_card feature={feature} index={idx} />
<% end %>
```

## Architecture Comparison

### React SPA Architecture

```
Browser
  ├─ React Runtime (~100KB)
  ├─ App State (client-side)
  ├─ Components (client-side)
  └─ API Calls → Backend
```

**Flow:**
1. Download JS bundle
2. Parse & execute React
3. Render components
4. Fetch data via API
5. Re-render with data

### Phoenix LiveView Architecture

```
Browser                    Server
  ├─ Minimal JS (~20KB)   ├─ LiveView Process
  ├─ WebSocket            ├─ App State
  └─ DOM Updates   ←──→   └─ HTML Rendering
```

**Flow:**
1. Server renders HTML
2. Send to browser
3. WebSocket connects
4. State changes → Server re-renders
5. Send diffs over WebSocket
6. Browser patches DOM

## File Structure Comparison

### React Version (Original)

```
src/
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── Features.tsx
│   │   └── Privacy.tsx
│   └── ui/
│       ├── PhoneCarousel.tsx
│       └── CustomCursor.tsx
├── App.tsx
└── index.tsx
```

### Phoenix LiveView Version (This)

```
lib/ykd_web/
├── live/
│   └── home_live.ex          (Main page)
├── components.ex              (All sections)
├── components/
│   ├── core_components.ex
│   └── layouts/
│       └── root.html.heex
└── router.ex

assets/
└── js/
    └── hooks.js              (UI interactions)
```

## Key Technical Differences

### 1. Rendering

| Aspect | React | Phoenix LiveView |
|--------|-------|------------------|
| Initial render | Client-side | Server-side |
| Updates | Client re-renders | Server sends diffs |
| SEO | Requires SSR setup | Native |
| Time to Interactive | ~2-3s | ~1s |

### 2. State Management

**React:**
- Client-side state with useState/useReducer
- Context API for global state
- External libraries (Redux, Zustand)

**Phoenix LiveView:**
- Server-side assigns
- WebSocket keeps state in sync
- No client state management needed

### 3. Data Fetching

**React:**
```jsx
useEffect(() => {
  fetch('/api/features')
    .then(res => res.json())
    .then(data => setFeatures(data));
}, []);
```

**Phoenix LiveView:**
```elixir
def mount(_params, _session, socket) do
  features = get_features()  # Direct DB access
  {:ok, assign(socket, features: features)}
end
```

### 4. Animations

**React (Framer Motion):**
```jsx
<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
```

**Phoenix LiveView (CSS):**
```html
<div class="fade-in-up">
```

```css
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### 5. Component Communication

**React:**
```jsx
// Props drilling
<Parent>
  <Child data={parentData} onChange={handleChange} />
</Parent>

// Or Context
const DataContext = createContext();
```

**Phoenix LiveView:**
```elixir
# Parent pass assigns
<.child_component data={@parent_data} />

# Or PubSub for events
Phoenix.PubSub.broadcast(YkdWeb.PubSub, "topic", {:event, data})
```

## Performance Metrics

### Bundle Size

| Metric | React | Phoenix LiveView |
|--------|-------|------------------|
| Initial JS | ~120KB | ~20KB |
| Runtime | React + ReactDOM | Phoenix LiveSocket |
| First Load | 300-500ms | 100-200ms |
| Hydration | Required | Not needed |

### Real-World Performance

**React:**
- Fast after initial load
- All logic runs client-side
- Heavy initial bundle
- Good for highly interactive apps

**Phoenix LiveView:**
- Instant first paint
- Minimal JavaScript
- WebSocket latency (~50ms)
- Great for form-heavy apps

## When to Use Each

### Choose React When:
- Building a mobile app (React Native)
- Need offline-first functionality
- Heavy client-side interactivity (games, editors)
- Team primarily JavaScript developers

### Choose Phoenix LiveView When:
- Building web applications
- SEO is critical
- Real-time features needed
- Want simpler architecture
- Team knows Elixir or functional programming

## Migration Path

If migrating from React to LiveView:

1. **Components → Functions**
   - Each React component becomes an Elixir function
   - Props become assigns

2. **State → Server Assigns**
   - useState → socket assigns
   - useEffect → mount/handle_event

3. **Events → Hooks or phx-click**
   - onClick → phx-click or client hooks
   - Keep complex DOM manipulation in hooks

4. **Styling → Keep Same**
   - Tailwind works identically
   - CSS stays in app.css

## Developer Experience

### React
```bash
npm install
npm run dev
# Edit component
# See changes instantly (HMR)
```

### Phoenix LiveView
```bash
mix deps.get
mix phx.server
# Edit component
# See changes instantly (Live Reload)
```

Both have excellent DX with hot reloading!

## Conclusion

Both approaches work great for this landing page. Phoenix LiveView offers:
- ✅ Simpler architecture (no client state)
- ✅ Better SEO out of the box
- ✅ Smaller JS bundle
- ✅ Server-side rendering

React offers:
- ✅ Larger ecosystem
- ✅ More developers know it
- ✅ Better for SPAs
- ✅ Can go fully offline

For a landing page like YKD, **Phoenix LiveView is excellent** because:
1. SEO matters for marketing pages
2. Minimal client-side interaction needed
3. Simpler deployment (one server)
4. Real-time capabilities built-in

The choice depends on your team's skills and requirements!
