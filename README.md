# Library Web App for Language Learning

## Description
A react + flask web app that allows users to select a Gutenberg Library book from a bookshelf, and then read it in any language. 
Users can customize the reading experience with options for light/dark mode, text difficulty, font, language, and the page number. 
Additionally, users can click on words they don't understand, which will translate the word to English and add it to a "mistakes" list. 
This list can then be reviewed using a built-in flashcard deck for better learning.

[Click here to see the library web app](https://language-learning-frontend-puce.vercel.app/)

## Features
- [Interactive Bookshelf](#interactive-bookshelf)
- [Words That Translate on Click](#words-that-translate-on-click)
- [Flash Cards](#flash-cards)
- [Adjustable Book Settings](#adjustable-book-settings)
- [Custom Fonts and Colors](#custom-fonts-and-colors)
- [Seamless Page Turning](#seamless-page-turning)

### Interactive Bookshelf
The Bookshelf component is a visually interactive feature that simulates a bookshelf filled with clickable books. 
Each book in the stack is styled dynamically using CSS variables, and users can click on these books to read them in the page section. 
When the user clicks on a book, the backend is called with the book title as a parameter and returns the page for the user to read. 
This allows for a seamless user experience where users can visually navigate through a collection of books, all while maintaining a playful, 
whimsical design.

The bookshelf is divided into multiple shelves, each containing a set of books arranged creatively with varying heights and rotations, 
making the interface both engaging and realistic.

This component also includes two cat characters as gifs that move periodically, enhancing the interactive experience.

### Words That Translate on Click
Word translation on click allows users to toggle between the original word and its translated form, 
while also adding words to a review list, offering a seamless learning experience.

Each word on the page is a checkbox component that is styled using CSS to look like a word. 
Upon clicking the checkbox, the component makes an API request to fetch the translation of a word, 
utilizing axios to communicate with the backend. This interaction is designed to help users quickly view the
translation and mark words for later review. The component’s state is managed locally with React’s useState hook, 
allowing it to track whether the word has been checked.

Each page is composed a list of paragraphs, which are sublists of words. These paragraphs are mapped over the page in a column, 
and words are mapped over each paragraph in rows to mimic the structure of a real book. Each word is given a unique id composed 
of the paragraph and word number to track which words should be translated or not.

The mistake list serves as a personalized collection of words that a user has difficulty remembering or understanding. 
When users click on a word, the word and its translation are added to the mistake list for further practice.

The background color of each word changes when it is selected to provide a visual indicator of which words 
are translated and which are in the original language.

### Flash Cards
The Flash Cards page is a dynamic learning tool that helps users review words from a custom list, displaying them in either the original 
language or their translation. Users can navigate through flashcards, flipping between the word and its translation, and marking words as 
"memorized" which removes them from the list.

The page utilizes React's useState and useEffect hooks to manage the state of the flashcards, including the index, 
translation visibility, and to make the cat image happy when the user memorizes a word.

The component integrates navigation using React Router's useNavigate and useLocation hooks to persist the 
list of words through different views.

The interface also includes intuitive controls to move through the deck with next/previous buttons and offers a visual 
reward by switching the cat image when a word is marked as memorized. The app is designed to be interactive and engaging, 
making language learning both fun and effective.

### Adjustable Book Settings
The book settings include two select dropdowns and a number input field in the header, enabling users to customize their 
experience by selecting a difficulty level and a language, as well as entering a page number.

When a user adjusts any of these settings, an API call is made to the backend with the selected parameters—difficulty, 
language, and book title. The backend processes the request and returns the appropriate page content in the selected language. 
If the user selects "Easy" difficulty, the page content is further simplified by OpenAI’s ChatGPT. The page is returned as a 
list of paragraphs, where each paragraph is a sublist of words.

To persist user preferences across sessions and page navigations, I utilized sessionStorage within a useEffect hook. 
This ensures that whenever a user changes a setting, the updated configuration is saved to session storage. 
Upon returning to the page, the application checks for any saved settings and, if present, restores them, 
providing a seamless user experience without requiring the user to reconfigure their preferences.

### Custom Fonts and Colors
The header includes three select dropdowns, allowing users to choose between light mode and dark mode, a font style, and a font size.

I defined two color palettes in the CSS, with variables representing the corresponding colors for each theme. I then replaced the hardcoded 
hex codes throughout the CSS with these theme variables. A useState hook is used to manage the theme selection, and it dynamically updates 
the theme when the user selects a new option.

For font and font size customization, I used useState hooks to track the selected font and font size. These values are then applied to the 
content component by passing them into its CSS, allowing the user to personalize the text display.

To persist user preferences across sessions and page navigations, I utilized sessionStorage within a useEffect hook. 
This ensures that whenever a user changes a setting, the updated configuration is saved to session storage. Upon returning to the page, 
the application checks for any saved settings and, if present, restores them, providing a seamless user experience without requiring the 
user to reconfigure their preferences.

### Seamless Page Turning
To make it easier for users to navigate to a specific page, I implemented a number input field where users can type in page numbers directly.

To provide a more interactive and immersive experience, I designed a "page turn" image that mimics the action of turning a page in a real book. 
This image appears when the user hovers over it. When the user clicks on the image in the bottom left corner, the page number decrements by one. 
Similarly, clicking on the image in the bottom right corner increments the page number by one.

I also added a small blank footer at the bottom of the page. This ensures that the "page turn" image doesn’t interfere with users trying to 
click on words, maintaining a smooth and user-friendly interaction.



