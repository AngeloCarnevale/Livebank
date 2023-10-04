---
sidebar_position: 3
---

In this section, I will talk in a little more detail about the technologies and tools used to develop the project.

## Technologies

This project has its own backend and frontend, in the next sections I will explain better the structure and composition of each one. For now, I would like to see this diagram, perhaps it will help you understand better. Basically, the structure is this:

```sh
                           Front-end
   ┌───────────────────────────────┐
   │                               │
   │       NextJS + TailwindCSS    │
   │                               │      Web Platform
   │                               │
   │                               │
   └──────────┬───────▲────────────┘
              │       │
              │       │
              │       │
              │       │
              │       │
┌─────────────┼───────┼─────────────────────────────────┐
│             │       │                                 │
│             │       │     Back-end                    │
│  ┌──────────▼───────┴────────────┐                    │
│  │                               │                    │
│  │                               │                    │
│  │       Python + Django         │         API        │
│  │                               │                    │
│  │                               │                    │
│  └──────────┬───────▲────────────┘                    │
│             │       │                                 │
│             │       │     Database                    │
│  ┌──────────▼───────┴────────────┐                    │
│  │                               │                    │
│  │                               │                    │
│  │          SQLite               │                    │
│  │                               │                    │
│  │                               │                    │
│  └───────────────────────────────┘                    │
│                                                       │
└───────────────────────────────────────────────────────┘
```

Frontend and backend communication is done through an API built in Python using Django Rest Framewrok.  

*Obs:* There is a third layer that was not represented in the diagram above, which encompasses both the frontend and the backend, but you don't need to know that now. Let's continue.