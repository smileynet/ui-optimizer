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
    classDef orchestrator fill:#303F9F,stroke:#1A237E,color:#E8EAF6
    classDef research fill:#1E3A5F,stroke:#0D47A1,color:#E3F2FD
    classDef design fill:#5D4037,stroke:#3E2723,color:#FFF8E1
    classDef validate fill:#B71C1C,stroke:#7F0000,color:#FFEBEE
    classDef complete fill:#1B5E20,stroke:#0D3D13,color:#E8F5E9
    
    O[ORCHESTRATOR]:::orchestrator
    P1[Phase 1: Research]:::research
    P2[Phase 2: Strategy]:::research
    P3[Phase 3: Solution]:::research
    P4[Phase 4: UI Design]:::design
    P5[Phase 5: Critique]:::validate
    P6[Phase 6: Polish]:::complete
    
    O --> P1 --> P2 --> P3 --> P4 --> P5 --> P6
```

### D2 Version

```d2
direction: right

orchestrator: ORCHESTRATOR {
  style.fill: "#303F9F"
  style.stroke: "#1A237E"
  style.font-color: "#E8EAF6"
}

p1: Phase 1 Research {
  style.fill: "#1E3A5F"
  style.stroke: "#0D47A1"
  style.font-color: "#E3F2FD"
}
p2: Phase 2 Strategy {
  style.fill: "#1E3A5F"
  style.stroke: "#0D47A1"
  style.font-color: "#E3F2FD"
}
p3: Phase 3 Solution {
  style.fill: "#1E3A5F"
  style.stroke: "#0D47A1"
  style.font-color: "#E3F2FD"
}
p4: Phase 4 UI Design {
  style.fill: "#5D4037"
  style.stroke: "#3E2723"
  style.font-color: "#FFF8E1"
}
p5: Phase 5 Critique {
  style.fill: "#B71C1C"
  style.stroke: "#7F0000"
  style.font-color: "#FFEBEE"
}
p6: Phase 6 Polish {
  style.fill: "#1B5E20"
  style.stroke: "#0D3D13"
  style.font-color: "#E8F5E9"
}

orchestrator -> p1
p1 -> p2 -> p3 -> p4 -> p5 -> p6
```

---

## Example: Build-Measure-Learn Loop

### Mermaid Version

```mermaid
flowchart TB
    classDef ideate fill:#5D4037,stroke:#3E2723,color:#FFF8E1
    classDef build fill:#1E3A5F,stroke:#0D47A1,color:#E3F2FD
    classDef measure fill:#1B5E20,stroke:#0D3D13,color:#E8F5E9
    
    IDEAS[Ideas]:::ideate
    BUILD[Build]:::build
    PRODUCT[Product / Prototype]:::build
    MEASURE[Measure]:::measure
    DATA[Data]:::measure
    
    IDEAS --> BUILD --> PRODUCT --> MEASURE --> DATA
    DATA -.->|Learn| IDEAS
```

### D2 Version

```d2
direction: down

ideas: Ideas {
  style.fill: "#5D4037"
  style.stroke: "#3E2723"
  style.font-color: "#FFF8E1"
}
build: Build {
  style.fill: "#1E3A5F"
  style.stroke: "#0D47A1"
  style.font-color: "#E3F2FD"
}
product: Product (prototype) {
  style.fill: "#1E3A5F"
  style.stroke: "#0D47A1"
  style.font-color: "#E3F2FD"
}
measure: Measure {
  style.fill: "#1B5E20"
  style.stroke: "#0D3D13"
  style.font-color: "#E8F5E9"
}
data: Data {
  style.fill: "#1B5E20"
  style.stroke: "#0D3D13"
  style.font-color: "#E8F5E9"
}

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
    classDef client fill:#1E3A5F,stroke:#0D47A1,color:#E3F2FD
    classDef api fill:#303F9F,stroke:#1A237E,color:#E8EAF6
    classDef service fill:#5D4037,stroke:#3E2723,color:#FFF8E1
    classDef data fill:#1B5E20,stroke:#0D3D13,color:#E8F5E9
    
    Web[Web App]:::client
    Mobile[Mobile App]:::client
    Gateway[API Gateway]:::api
    Auth[Auth Service]:::api
    Users[User Service]:::service
    Products[Product Service]:::service
    Orders[Order Service]:::service
    DB[(PostgreSQL)]:::data
    Cache[(Redis)]:::data
    
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
  style.fill: "#1E3A5F"
  style.stroke: "#0D47A1"
  style.font-color: "#E3F2FD"
  web: Web App
  mobile: Mobile App
}

api: API Layer {
  style.fill: "#303F9F"
  style.stroke: "#1A237E"
  style.font-color: "#E8EAF6"
  gateway: API Gateway
  auth: Auth Service
}

services: Service Layer {
  style.fill: "#5D4037"
  style.stroke: "#3E2723"
  style.font-color: "#FFF8E1"
  users: User Service
  products: Product Service
  orders: Order Service
}

data: Data Layer {
  style.fill: "#1B5E20"
  style.stroke: "#0D3D13"
  style.font-color: "#E8F5E9"
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
  style.fill: "#1E3A5F"
  style.stroke: "#0D47A1"
  style.font-color: "#E3F2FD"
}

app: Application {
  style.fill: "#37474F"
  style.stroke: "#263238"
  style.font-color: "#ECEFF1"
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

## Mermaid Styling Patterns

### Using classDef (Recommended)

Define reusable style classes for semantic meaning:

```mermaid
flowchart LR
    classDef primary fill:#303F9F,stroke:#1A237E,color:#E8EAF6
    classDef secondary fill:#37474F,stroke:#263238,color:#ECEFF1
    classDef success fill:#1B5E20,stroke:#0D3D13,color:#E8F5E9
    classDef warning fill:#E65100,stroke:#BF360C,color:#FFF3E0
    classDef errorStyle fill:#B71C1C,stroke:#7F0000,color:#FFEBEE
    
    A[Start]:::primary
    B{Check}:::secondary
    C[Success]:::success
    D[Review]:::warning
    E[Error]:::errorStyle
    
    A --> B
    B -->|Pass| C
    B -->|Warn| D
    B -->|Fail| E
```

### Workflow Phases Example

```mermaid
flowchart LR
    classDef research fill:#1E3A5F,stroke:#0D47A1,color:#E3F2FD
    classDef design fill:#5D4037,stroke:#3E2723,color:#FFF8E1
    classDef validate fill:#B71C1C,stroke:#7F0000,color:#FFEBEE
    classDef complete fill:#1B5E20,stroke:#0D3D13,color:#E8F5E9
    
    R[Research]:::research
    D[Design]:::design
    V[Validate]:::validate
    C[Complete]:::complete
    
    R --> D --> V --> C
```

### Built-in Themes

MkDocs Material automatically handles light/dark mode. For reference, Mermaid's built-in themes:

| Theme | Best For |
|-------|----------|
| `default` | Standard light documentation |
| `dark` | Dark mode interfaces |
| `neutral` | Print/black-white |
| `forest` | Green-themed |
| `base` | Custom styling only |

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
