# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Tasks to do
* Create JSON Data for trello card
* Design Card 
* Arrange card on columns

# Card JSON Data
{id: ,list_id: ,title: , description:, created_date:, is_active, due_date:, reminder_date}
Use website: https://www.jsongenerator.io/
Query: {
  "result": [
    "repeat(15)",
{"id": "int(1,999)" ,"list_id": "int(1,999)" ,
"title":"productName()" , 
"description":"productDescription()" , 
"created_date":"date()" , 
"is_active":"enum(true,false)",
 "due_date":"date()" , "reminder_date":"date()"
}
  ]
}