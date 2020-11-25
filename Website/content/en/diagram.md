---
title: Model diagram
---

{{< mermaid >}}
classDiagram
class Model {
  version: float
  executiveSummary: string
  license: string
}

class BusinessFunction {
  name: string
  description: string
  color: string
  logoURL: string
  order: integer

}

class SecurityPractice {
  name: string
  asignee: string
  shortDescription: string
  longDescription: string
  color: string
  progress: integer
  order: integer
}

class ActivityStream {
  letter: string
  name: string
  description: string
}

class PracticeLevel {
  description: string
}

class MaturityLevel {
  number: integer
  description: string
}

class Activity {
  name: string
  description: string
  objective: string
  notes: string
  guidance: integer
  references: Activity
}

class QualityIndicator {
  text: string
}

class CoverageIndicator {
  text: string
  value: integer
}

class CoverageIndicatorSet {
  name: string
}

Model "1" *-- "many" BusinessFunction : contains
BusinessFunction "1" *-- "many"  SecurityPractice: contains
SecurityPractice --> "has" PracticeLevel
SecurityPractice --> "has" ActivityStream
PracticeLevel --> "belongs" MaturityLevel
MaturityLevel --> Activity
Activity --> "belongs" ActivityStream
Activity --> "related" Activity
Activity --> "has" QualityIndicator
Activity --> "has" CoverageIndicator
CoverageIndicator --> "belongs" CoverageIndicatorSet

{{< /mermaid >}}

<!-- See https://mermaid-js.github.io/mermaid-live-editor/ -->
