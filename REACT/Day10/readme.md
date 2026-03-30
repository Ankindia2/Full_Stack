useMemo se ham ek function ko rok skate hai jaise yaha count or fibbonacii hai to agar number me change krunga to mera bss fibbonaci me change hoga baki count wala apne aap same print hoga.
memo me bhi dependency array hoti hai .
useEffect or memo same hi kam karti hai lekin useEffect ialiy use nhi kiya gaya hai ki woo 2 baar rerender krta hai or memo ek baar me hi ho jata hai jise ki work aasan ho jata hai.
memo call back leta hai or useeffect bhi call back leta hai.


 1️⃣ useMemo is a Performance Hook
It is used to optimize performance, not to change logic.

2️⃣ It Memorizes a Value
useMemo stores the result of a function and reuses it.

3️⃣ It Runs Only When Dependency Changes
const value = useMemo(() => calculation, [dependency]);
If dependency changes → recalculates
If dependency same → returns stored value

4️⃣ It Prevents Unnecessary Recalculation
When a component re-renders:
Normally → all functions run again
With useMemo → expensive function runs only if 


🚨 Big Concept Difference:-
Feature         	useEffect	                 useMemo
(i)Purpose  	        Side effects	              Performance optimization
(ii)Returns	            Nothing	                       A value
(iii)Runs when	        After render	                During render
(iv)Used for	        API calls, timers           	Heavy calculations
(v)Stops re-render?	    ❌ No	                        ❌ No