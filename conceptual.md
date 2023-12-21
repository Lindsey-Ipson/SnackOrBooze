### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?

React Router allows you to create single-page React applications that behave as if they were traditional server-side rendering applications. This includes functionality such as being able to navigate using the browser's forward and backward buttons, bookmark pages, and show different URLs depending on the current "page". It also facilitates React testing because it allows for the history API to be mocked through MemoryRouter, which enables tests to be written for React applications outside of a browser environment.

- What is a single page application?

A single-page application is one in which all information for the application is sent to the client upfront and then the client's browser is responsible for rendering all the content or each "page" of the application. The single page is never actually refreshed; instead the URL is manipulated and content is rendered by the client's browser.

- What are some differences between client side and server side routing?

In client side rendering, all of an application's information is sent to the client at once, and then the client's browser is responsible for rendering that all of that page's content moving forward. The page is never actually refreshed. In server side rendering, each time a new page is accessed, there is another separate request to the server to "serve" more content. The page is refreshed every time this happens. The browser only has enough data to render the current page, not previous and future ones.

- What are two ways of handling redirects with React Router? When would you use each?

The two different ways of handling redirects with React router are through declarative redirects, which are redirects using a redirect component within React Router, and programmatic redirects, which are redirects that occur within a component which allows React Router to manually initiate a navigation to a different route, usually when a certain condition is met or user interaction occurs, such as a button click. In React 5 these two different ways of redirecting were accomplished with `Redirect` (declarative) and `useHistory` (programmatic), and in React 6 they are accomplished with `Navigate` (declarative) and `useNavigate` (programmatic). The `useNavigate` hook is useful for when a user is now done with a certain page and should now be taken somewhere else, but the user is still allowed to use the browser's back button to return to that page. The `Navigate` component is useful for when a user should not have arrived at a certain page and should be redirected elsewhere, and the user may not use the back button to return to that page.

- What are two different ways to handle page-not-found user experiences using React Router? 

One way to handle a page-not-found error is to include a `<Route path="*" element={<Navigate to="/" />} />` which will redirect the user to the home page when they try to access a URL that is not found. Another way is to create a not-found component and then render that component when the user tries to access a not-found URL, with `Route path="*" element={<NotFound />} />`

- How do you grab URL parameters from within a component using React Router?

The `useParams` hook allows you to access URL parameters from within a component using React Router. The `useParams` hook stores the URL parameters and returns an object with those parameters in key-value pairs.

- What is context in React? When would you use it?

In React, context allows for certain data to be available universally across an application, or can allow for data to be available across certain components. It is best to use context when an application begins to have too much prop drilling, when there is too much repetition over components, or when employing global themes, such as a color scheme over a whole application.

- Describe some differences between class-based components and function
  components in React.

The syntax is different between class-based components and functional components in React in that class-bassed components require the use of the `class` keyword and extend the `React.Component` class and they return the component's UI using the `render` method. On the other hand, functional components use shorter syntax as they can simply be declared as a function, and what is directly returned is rendered. Also, in class-based components, state is initialized in the constructor, accessed by `this.state`, and updated with `this.setState()`. In contrast, functional components, pieces of state are declared and accessed through separate `useState` hooks which return a piece of data and a function for updating that data. Moreover, the two types of components utilize different lifecycles, as class-based components use lifecycles such as `componentDidMount`, `componentDidUpdate`, `componentWillUnmount` which functional components utilize `useEffect` to perform lifecycle methods.

- What are some of the problems that hooks were designed to solve?

Two of the most important issues that hooks were designed to solve include code and logic having to be repeated many times in the lifecycles of components and the difficulties of sharing logic among numerous components previous to hooks.
