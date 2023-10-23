# &lt;umd-element-footer&gt; Web Component

!['Footer Example'](source/assets/example.png)

## Installation

```

$ yarn add @universityofmaryland/umd-element-footer

```

## Basic Usage

#### Import the component in your js if you bundle using a transpile with babel or typescript.

```js
import '@universityofmaryland/umd-element-footer';
```

#### HTML usage

##### Styling

You may utilize design system classes and tailwind CSS to style your content. See below for example usage.

[UMD design system classes](https://designsystem.umd.edu/)

[Tailwind CSS Styles](https://tailwindcss.com/docs)

##### Attributes

##### Slots

##### Example Usage

```html
<umd-element-footer> </umd-element-footer>
```

##### Advanced Example Usage

```html
<umd-element-footer type="visual">
  <div slot="contact">
    <address>
      <p class="umd-interactive-sans-medium">
        Office of the Senior Vice President &amp; Provost
      </p>
      <p class="mail-address">
        <span>Suite 1132, Main Administration Building</span>
        <span>7901 Regents Drive College Park, MD 20742</span>
      </p>
      <p class="contact-list">
        <a href="mailto:provost@umd.edu">
          <span aria-hidden="true">provost@umd.edu</span>
          <span class="sr-only"
            >Email: Office of the Provost provost@umd.edu</span
          >
        </a>
        <a href="tel:3014055252">
          <span aria-hidden="true">301.405.5252</span>
          <span class="sr-only">Call: 301-405-5252</span>
        </a>
      </p>
    </address>
  </div>

  <div slot="social-links">
    <a
      href="https://www.youtube.com/user/UMD2101"
      rel="noopener noreferrer"
      target="_blank"
      aria-label="Link to the youtube channel for the University of Maryland"
    ></a>
    <a
      href="https://www.facebook.com/UnivofMaryland"
      rel="noopener noreferrer"
      target="_blank"
      aria-label="Link to the facebook page for the University of Maryland"
    ></a>
    <a
      href="https://twitter.com/UofMaryland"
      rel="noopener noreferrer"
      target="_blank"
      aria-label="Link to the twitter page for the University of Maryland"
    ></a>
    <a
      href="https://www.instagram.com/univofmaryland/"
      rel="noopener noreferrer"
      target="_blank"
      aria-label="Link to the instagram page for the University of Maryland"
    ></a>
  </div>

  <div slot="utility-links">
    <div class="umd-lock">
      <a
        href="http://calendar.umd.edu/"
        target="_blank"
        rel="noopener noreferrer"
        >UMD Calendar</a
      >
    </div>
  </div>

  <img
    slot="background-image"
    src="option.jpg"
    alt="University of Maryland Logo"
  />
</umd-element-footer>
```

## License

Distributed under the MIT license. See LICENSE for details.
