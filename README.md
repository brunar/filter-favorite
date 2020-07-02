# Filter Favorite Product
### Replacing Redux with React Hooks Section 28: Bonus

### useContext VS Performance
The statement here is clear `The context is great for a low frequency updates` but not for high frequency ones.

That means if you have something which changes really let's say the user authentication status with just the example I used and do react hooks module debt is fine to be covered with the context API because this will not change all the time.

Not that often the same would be the case if you have something like theming on a page also something which doesn't change all the time for a favorite status like this you could already argue that it's quite a high frequency update.

Now obviously users might not be tapping these buttons every second but still switching to favorite status of something will very likely occur way more often than logging in or changing the theme of a page.

And therefore I would argue that this is more on the high frequency side.
Just like maybe managing a shopping cart.

Basically anything which changes rather often the context API of course works in that case but regarding the performance it's simply not optimized for that.

The way to react context API works is such dead whenever something changes in your context it has no way of cleverly figuring out which component that uses does context really is concerned and which component is not.

Which means that every component that uses you as context will rebuild will re render when you switch something in that context no matter if it's directly affected or not.

And in general the react context API is simply not optimized and not meant to be your global state management tool in your app.

`It's meant for some state like authentication status like the theme but not for all your state because of these missing optimizations and all of this missing intent behind the context API.`

### In Custom Hooks the Performance of React.memo() do not work

#### Example React.memo()
React memo around design and should make sure they don't render if their props didn't change at the props for the other item certainly didn't change.

They have the same title the same favorite status ends on you'll notice if we do that they still render the reason for dead is our custom hook in each product item.

I'm using used store so I use my custom hook and in that custom hook we use use the state so whenever set state is called here the component that uses this hook will be re rendered makes sense it's the intended behavior it's the default behavior while we can fix this or improve this in our custom hook.