### Project is implemented using React library and some additional libraries such as Bootstrap (table, modal, button), Moment (date format) and few more. 

How to run application:

- Open the command prompt or Terminal and navigate to React project directory.
- Run the following command to install all the necessary dependencies: npm install
- Once the installation is complete, run the following command to start the development server: npm start

How application works:

- When application starts, topics (topic.label value) are loaded from topics.json file and presented in a table on the left side
- There are 6 different font sizes of topics depending on volume
- Topic with sentiment score > 60 is displayed in green color
- Topic with sentiment score < 40 is displayed in red color
- Other topics are grey

- When a topic is not clicked yet, there will be a message that inform user to select the topic from the table
- When a topic is clicked, metadata about the topic are displayed (total volume, and how that breaks down into positive,      neutral and negative sentiment) in the component from the right side
- Positive sentiment value has green and negative has red color
- If some sentiment property does not exist in topic object, it will have default value 0

- When the user clicks on 'Volume by days' button next to a topic (topic.label) in the table, modal will pop up
- Modal shows topic searches (date and volume) sorted by date (ascending)
- Date values in modal are parsed into "YYYY-MM-DD" format

### Application UI preview 

![preview1](https://user-images.githubusercontent.com/76042091/234686537-9c9e9298-e29b-441b-bcaa-dbfdd4885b70.jpg)

![preview2](https://user-images.githubusercontent.com/76042091/234687564-b431bbf9-6393-4f2a-a60d-7439317e575f.jpg)

![preview3](https://user-images.githubusercontent.com/76042091/234687632-9e5d2010-e91b-4968-9ab6-d97511db48f2.jpg)