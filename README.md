# Web Content Summarizer

Welcome to the Web Content Summarizer project! This web application allows users to input a URL of a web page with content, and it provides a summarized description of that page. The summarization process is powered by an external API provided by RapidAPI.

## Technologies Used

- **React**: This project is built using React, a popular JavaScript library for building user interfaces.

- **RapidAPI**: The summarization of web content is made possible through an external API call to RapidAPI's Article Extractor and Summarizer service. To run this project, you'll need to create an account on RapidAPI and obtain an API Key.

## Getting Started

To run this project on your local machine, follow these steps:

1. Clone this GitHub repository to your local machine.

2. Create an account on RapidAPI (if you don't have one already) and obtain an API Key for the Article Extractor and Summarizer service.

3. Create a `.env` file in the root directory of the project.

4. In the `.env` file, add the following line, replacing `'VITE_RAPID_API_ARTICLE_KEY'` = Your API key with your actual RapidAPI API Key:

5. Save the `.env` file.

6. Open your terminal and navigate to the project's directory.

7. Run the following commands to install project dependencies and start the development server:

npm install
npm start

## License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
