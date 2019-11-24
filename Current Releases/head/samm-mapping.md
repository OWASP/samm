---
title: Mapping 1.5 to 2.0
weight: 4
type: security_practice
---
## Overview

For those organizations using 1.0 or 1.5 versions of SAMM it's important to take the time to understand how the framework has evolved.  Organizations that implemented security initiatives and are looking for SAMM scores to validate effectiveness will need to take these changes into consideration since in most cases expectations for maturity level 3 have been significantly increased in favor of automation and better alignment with development teams.

Organizationally, some important changes worth noting:

- Construction is now Design
- New Business Function: Implementation
- New Operational Management Practice
- Activities are now continuous throughout each Security Practice
- Operational Enablement eliminated and absorbed by other practices

The chart below provides a high-level summary of the changes between different practices, with more details to follow:

<script src="https://cdn.jsdelivr.net/npm/mermaid@8.4.0/dist/mermaid.min.js"></script>
<script>mermaid.initialize({startOnLoad:true});</script>

## Governance

<div class="mermaid">
    graph LR
    classDef gov fill:#7ac,stroke:#000,stroke-width:2px;
    classDef des fill:#d75,stroke:#000,stroke-width:2px;
    classDef imp fill:#ff0,stroke:#000,stroke-width:2px;
    classDef ver fill:#686,stroke:#000,stroke-width:2px;
    classDef ops fill:#c55,stroke:#000,stroke-width:2px;
    sm1 --> |Increased emphasis on Metrics|sm2
    pc1 --> |Focus on usability|pc2
    pc1 --> |Published as requirements|sr2
    eg1 --> |Added guidance for Security Champions|eg2
    sm1 --> |Risk-Based Classification|ta2
    subgraph SAMM 1.5
        subgraph Governance
            eg1(Education & Guidance)
            sm1(Strategy & Metrics)
            pc1(Policy & Compliance)
        end
    end
    subgraph SAMM 2.0
    subgraph Governance 2
        sm2(Strategy & Metrics)
        pc2(Policy & Compliance)
        eg2(Education & Guidance)
    end
    subgraph Design
        ta2(Threat Assessment)
        sr2(Security Requirements)
    end
    class sm1,pc1,eg1,sm2,pc2,eg2 gov
    class ta2,sr2,sa2,ta1,sr1,sa1 des
    class sb2,sd2,dm2 imp
    class dr1,ir1,st1,aa2,rdt2,st2 ver
    class im1,eh1,oe1,im2,em2,om2 ops
    end
</div>


## Construction
<div class="mermaid">
graph LR
    classDef gov fill:#7ac,stroke:#000,stroke-width:2px;
    classDef des fill:#d75,stroke:#000,stroke-width:2px;
    classDef imp fill:#ff0,stroke:#000,stroke-width:2px;
    classDef ver fill:#686,stroke:#000,stroke-width:2px;
    classDef ops fill:#c55,stroke:#000,stroke-width:2px;
    ta1 --> |Emphasis on mature methodologies|ta2
    ta1 --> |Evaluating 3rd-party components|sa2
    sr1 --> |Standardizing on consistent frameworks|sr2
    sa1 --> |Focus on design of supporting architecture|sa2
    subgraph SAMM 1.5
        subgraph Construction
            ta1(Threat Assessment)
            sr1(Security Requirements)
            sa1(Secure Architecture)
        end
    end
    subgraph SAMM 2.0
    subgraph Design
        ta2(Threat Assessment)
        sr2(Security Requirements)
        sa2(Security Architecture)
    end
    class sm1,pc1,eg1,sm2,pc2,eg2 gov
    class ta2,sr2,sa2,ta1,sr1,sa1 des
    class sb2,sd2,dm2 imp
    class dr1,ir1,st1,aa2,rdt2,st2 ver
    class im1,eh1,oe1,im2,em2,om2 ops
end
</div>

## Verification
<div class="mermaid">
graph LR
    classDef gov fill:#7ac,stroke:#000,stroke-width:2px;
    classDef des fill:#d75,stroke:#000,stroke-width:2px;
    classDef imp fill:#ff0,stroke:#000,stroke-width:2px;
    classDef ver fill:#686,stroke:#000,stroke-width:2px;
    classDef ops fill:#c55,stroke:#000,stroke-width:2px;
    dr1 --> |Increased focus on compliance|aa2
    ir1 --> |Enhanced control verification|rdt2
    ir1 --> |Code review activities|st2
    st1 --> |Scanning & penetration testing|st2
    st1 --> |Build-time code scanning|sb2
    st1 --> |Deployment security guard-rails|sd2
    subgraph SAMM 1.5
        subgraph Verification
            dr1(Design Review)
            ir1(Implementation Review)
            st1(Security Testing)
        end
    end
    subgraph SAMM 2.0
    subgraph Implementation
        sb2(Secure Build)
        sd2(Secure Deployment)
    end
    subgraph Verification 2.0
        aa2(Architecture Assessment)
        rdt2(Requirements-Driven Testing)
        st2(Security Testing)
    end
    class sm1,pc1,eg1,sm2,pc2,eg2 gov
    class ta2,sr2,sa2,ta1,sr1,sa1 des
    class sb2,sd2,dm2 imp
    class dr1,ir1,st1,aa2,rdt2,st2 ver
    class im1,eh1,oe1,im2,em2,om2 ops
    end
</div>

## Operations
<div class="mermaid">
graph LR
    classDef gov fill:#7ac,stroke:#000,stroke-width:2px;
    classDef des fill:#d75,stroke:#000,stroke-width:2px;
    classDef imp fill:#ff0,stroke:#000,stroke-width:2px;
    classDef ver fill:#686,stroke:#000,stroke-width:2px;
    classDef ops fill:#c55,stroke:#000,stroke-width:2px;
    im1 --> |Enhanced metrics and feedback loops|dm2
    im1 --> |Expanded detection of security incidents|im2
    eh1 --> |Container security considerations|sd2
    eh1 --> |Operations protection tools|aa2
    eh1 --> |Configuration baselines and patching|em2
    oe1 --> |Expanded use of automation|sd2
    subgraph SAMM 1.5
        subgraph Operations
            im1(Issue Management)
            eh1(Environment Hardening)
            oe1(Operational Enablement)
        end
    end
    subgraph SAMM 2.0
    subgraph Implementation
        sd2(Secure Deployment)
        dm2(Defect Management)
    end
    subgraph Verification 2.0
        aa2(Architecture Assessment)
    end
    subgraph Operations 2.0
        im2(Incident Management)
        em2(Environment Management)
    end
    class sm1,pc1,eg1,sm2,pc2,eg2 gov
    class ta2,sr2,sa2,ta1,sr1,sa1 des
    class sb2,sd2,dm2 imp
    class dr1,ir1,st1,aa2,rdt2,st2 ver
    class im1,eh1,oe1,im2,em2,om2 ops
end
</div>
