agar ham red ko click krenge to red ho jaayega agar phir se red click kiya jaay to dubara function call hoga or render hoga lekin tisri baar nhi hoga doo baar isliye ho raha hau kyuki premitive value hai ,lekin object ke sath dubara nhi hota kyuki refrence se hota hai

<!-- useEffect -->
useEffect render ke dauran nahi,
render ke baad run hota hai.
Page load pe ek hi baar.
👉 React = ghar bana raha hai
👉 useEffect = ghar banne ke baad safai / decoration

<!-- memo -->(export default React.memo(Colorful);)
👉 Memo = yaad rakhna
(React bolta hai:
“Agar props same hain… to component dobara render nahi karunga.”)

👉 React Colorful component ko yaad rakhega
👉 same props → render skip

🚀 Real benefit

👉 Performance improve
👉 unnecessary renders kam
👉 smooth UI

🔑 Golden rule

Same props → no render
New props → render
