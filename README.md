# Agenlytic Frontend

React + TypeScript project configured with:
- **Language**: TypeScript (`.tsx` / `.ts`)
- **Navigation**: `react-router-dom`
- **State Management**: Classic Redux (`redux` & `react-redux`) with Actions and Reducers
- **Side Effects**: Redux Saga (`redux-saga`)

---

## Folder Structure

```
agenlytic-frontend/
├── public/
├── src/
│   ├── assets/
│   ├── components/
│   ├── pages/
│   │   └── HomeScreen.tsx              # Blank screen rendering "react js"
│   ├── router/
│   │   └── AppRouter.tsx               # react-router-dom route configuration
│   ├── store/
│   │   ├── actions/
│   │   │   └── exampleActions.ts       # Action creators
│   │   ├── reducers/
│   │   │   └── exampleReducer.ts       # Pure reducer with switch-case
│   │   ├── sagas/
│   │   │   └── exampleSaga.ts          # Redux-Saga generator functions
│   │   ├── types/
│   │   │   └── actionTypes.ts          # Action type constants & interfaces
│   │   ├── hooks.ts                    # Typed useAppDispatch & useAppSelector
│   │   ├── index.ts                    # Redux store with applyMiddleware(saga)
│   │   ├── rootReducer.ts              # Combined reducers
│   │   └── rootSaga.ts                 # Combined root saga
│   ├── styles/
│   │   └── index.css                   # Minimal styling
│   ├── App.tsx                         # Provider & BrowserRouter setup
│   ├── main.tsx                        # Entry point
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## Commands

```bash
# Start development server
yarn dev # or npm run dev

# Run TypeScript check & build for production
yarn build # or npm run build
```
