# Diagram Tools Comparison

This page demonstrates different diagram rendering options available in this documentation.

## Quick Comparison

| Tool | Strengths | Best For |
|------|-----------|----------|
| **Mermaid** | Built-in, simple syntax, GitHub compatible | Quick diagrams, flowcharts |
| **D2** | Professional output, unified syntax, sketch mode | Architecture, polished docs |
| **Kroki** | 24+ diagram types via one API | Specialized diagrams (future) |

---

## Example: Agent Workflow

### Mermaid Version

```mermaid
flowchart LR
    subgraph Orchestrator["ORCHESTRATOR"]
        direction LR
    end
    
    P1["Phase 1\nResearch"] --> P2["Phase 2\nStrategy"]
    P2 --> P3["Phase 3\nSolution"]
    P3 --> P4["Phase 4\nUI Design"]
    P4 --> P5["Phase 5\nCritique"]
    P5 --> P6["Phase 6\nPolish"]
    
    Orchestrator --> P1
    
    style Orchestrator fill:#e0e7ff,stroke:#4f46e5
    style P1 fill:#dbeafe,stroke:#3b82f6
    style P2 fill:#dbeafe,stroke:#3b82f6
    style P3 fill:#dbeafe,stroke:#3b82f6
    style P4 fill:#fef3c7,stroke:#f59e0b
    style P5 fill:#fee2e2,stroke:#ef4444
    style P6 fill:#d1fae5,stroke:#10b981
```

### D2 Version

```d2
direction: right

orchestrator: ORCHESTRATOR

p1: Phase 1\nResearch
p2: Phase 2\nStrategy
p3: Phase 3\nSolution
p4: Phase 4\nUI Design
p5: Phase 5\nCritique
p6: Phase 6\nPolish

orchestrator -> p1
p1 -> p2 -> p3 -> p4 -> p5 -> p6
```

---

## Example: Build-Measure-Learn Loop

### Mermaid Version

```mermaid
flowchart TB
    IDEAS[Ideas] --> BUILD[Build]
    BUILD --> PRODUCT["Product\n(prototype)"]
    PRODUCT --> MEASURE[Measure]
    MEASURE --> DATA[Data]
    DATA -.->|Learn| IDEAS
    
    style IDEAS fill:#fef3c7,stroke:#f59e0b
    style BUILD fill:#dbeafe,stroke:#3b82f6
    style PRODUCT fill:#dbeafe,stroke:#3b82f6
    style MEASURE fill:#d1fae5,stroke:#10b981
    style DATA fill:#d1fae5,stroke:#10b981
```

### D2 Version

```d2
direction: down

ideas: Ideas
build: Build
product: Product\n(prototype)
measure: Measure
data: Data

ideas -> build -> product -> measure -> data
data -> ideas: Learn {
  style.stroke-dash: 5
}
```

---

## Example: Architecture Diagram

### Mermaid Version

```mermaid
flowchart TB
    subgraph Client["Client Layer"]
        Web[Web App]
        Mobile[Mobile App]
    end
    
    subgraph API["API Layer"]
        Gateway[API Gateway]
        Auth[Auth Service]
    end
    
    subgraph Services["Service Layer"]
        Users[User Service]
        Products[Product Service]
        Orders[Order Service]
    end
    
    subgraph Data["Data Layer"]
        DB[(PostgreSQL)]
        Cache[(Redis)]
    end
    
    Web --> Gateway
    Mobile --> Gateway
    Gateway --> Auth
    Gateway --> Users
    Gateway --> Products
    Gateway --> Orders
    Users --> DB
    Products --> DB
    Orders --> DB
    Users --> Cache
```

### D2 Version

```d2
direction: down

client: Client Layer {
  web: Web App
  mobile: Mobile App
}

api: API Layer {
  gateway: API Gateway
  auth: Auth Service
}

services: Service Layer {
  users: User Service
  products: Product Service
  orders: Order Service
}

data: Data Layer {
  db: PostgreSQL {
    shape: cylinder
  }
  cache: Redis {
    shape: cylinder
  }
}

client.web -> api.gateway
client.mobile -> api.gateway
api.gateway -> api.auth
api.gateway -> services.users
api.gateway -> services.products
api.gateway -> services.orders
services.users -> data.db
services.products -> data.db
services.orders -> data.db
services.users -> data.cache
```

---

## Example: D2 Sketch Mode

D2 supports a hand-drawn "sketch" mode for a more informal feel:

```d2
# This would render in sketch mode if configured

user: User {
  shape: person
}

app: Application {
  ui: Frontend
  api: Backend API
  db: Database {
    shape: cylinder
  }
}

user -> app.ui: Uses
app.ui -> app.api: REST calls
app.api -> app.db: Queries
```

---

## Mermaid Theming Options

### Default Theme
```mermaid
%%{init: {'theme': 'default'}}%%
flowchart LR
    A[Start] --> B[Process] --> C[End]
```

### Dark Theme
```mermaid
%%{init: {'theme': 'dark'}}%%
flowchart LR
    A[Start] --> B[Process] --> C[End]
```

### Forest Theme
```mermaid
%%{init: {'theme': 'forest'}}%%
flowchart LR
    A[Start] --> B[Process] --> C[End]
```

### Neutral Theme
```mermaid
%%{init: {'theme': 'neutral'}}%%
flowchart LR
    A[Start] --> B[Process] --> C[End]
```

### Custom Theme Variables

```mermaid
%%{init: {
  'theme': 'base',
  'themeVariables': {
    'primaryColor': '#4f46e5',
    'primaryTextColor': '#fff',
    'primaryBorderColor': '#3730a3',
    'lineColor': '#6366f1',
    'secondaryColor': '#e0e7ff',
    'tertiaryColor': '#f0f0ff'
  }
}}%%
flowchart LR
    A[Start] --> B[Process] --> C[End]
```

---

## Recommendations

### Use Mermaid When:
- Quick diagrams needed
- GitHub README compatibility required
- Simple flowcharts or sequence diagrams
- Built-in theme integration is sufficient

### Use D2 When:
- Professional/polished output needed
- Complex architecture diagrams
- Consistent styling across many diagrams
- Hand-drawn sketch style desired

---

## Future: Kroki Integration

Kroki provides a unified API for 24+ diagram types. See [Kroki Setup Guide](./kroki-setup.md) for future integration instructions.

Supported diagram types include:
- BlockDiag, SeqDiag, ActDiag, NwDiag
- PlantUML (all UML types)
- C4 architecture diagrams
- Graphviz/DOT
- Mermaid
- D2
- Excalidraw
- And many more...
