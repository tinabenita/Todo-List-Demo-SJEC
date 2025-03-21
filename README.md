﻿# Todo-List-Demo-SJEC 

## Getting Started  

### Clone or Download the Project  
1. Clone this repository using:  
   ```sh
   git clone https://github.com/tinabenita/Todo-List-Demo-SJEC.git
   ```
   or download the ZIP file and extract it.  

## Backend Setup  
1. Navigate to the `backend` folder.  
2. Open the `.sln` file in **Visual Studio**.
3. Create a `.env` file under **TodoList.Api**.
4. Add the following connection string in your `.env` file:
   ```sh
   ConnectionStrings__DBCon="Host=localhost;Port=5432;Database=todolistdemo;Username=postgres;Password=yourPassword"
   ```
5. In Visual Studio, go to `Tools > NuGet Package Manager > Package Manager Console`. Run the following command:
   ```sh
   update-database
   ```
6. Click **F5** or press **Run** on the top menu to start the API.  

## Frontend Setup  
1. Open the `frontend` folder in **Visual Studio Code**.  
2. Open the terminal in VS Code and ensure you're inside the `frontend` folder.  
3. Install dependencies (only for the first time):  
   ```sh
   npm install
   ```
4. Run the application:  
   ```sh
   ng serve -o
   ```
   This will open the application in your default browser. Make sure your API is running. 

## Workshop Tasks  
During the workshop, we will be adding:   
- **GET, POST, DELETE** endpoints in the backend.  
- Services to utilize these endpoints in the frontend.  
We will also connect our backend to the database. 

### Your Task 🚀  
✅ Implement the **PUT request** in the backend.  
✅ Use it in the frontend. Make sure the edit button and edit form component works properly.  
✅ Raise a **Pull Request (PR)** or drop me a message on **LinkedIn** (link available on my GitHub profile).  

Happy coding!   
