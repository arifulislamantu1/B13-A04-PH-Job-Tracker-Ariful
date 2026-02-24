1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

==> getElementById selects a single element by its unique ID , while getElementByClassName selects with a given class and returns a live HTMLCollection. querySelector and querySelectorAll use CSS selectors to select the first or all matching elements, returning a static Element or NodeList.


2. How do you create and insert a new element into the DOM?

==> create a new element with document.createElement() and set its content or attributes. Then insert it into the DOM using methods like appendChild, prepend or insertBefore.


3. What is Event Bubbling? And how does it work?

==> Event Bubbling is when an event on a child element propagates upward through its parent elements in the DOM. it works by first triggering the event on the target element, then bubbling up to each ancestor until it reaches the document or is stopped with event.stopPropagation().




4. What is Event Delegation in JavaScript? Why is it useful?

==> Event Delegation is when a parent element handles events for its child elements using a single listener.  its useful because it sanes memory and works for dynamically added children without adding separate listeners.





5. What is the difference between preventDefault() and stopPropagation() methods?


==> preventDefault() stops the browsers default action for an  event like following a link or submitting  a form. stopPropagation() stops the even from, bubbling or capturing through parent/ancestor  elements in the DOM.