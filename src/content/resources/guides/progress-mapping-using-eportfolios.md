---
title: "Progress Mapping Using ePortfolios: Visualising Trainee Development in CBME"
description: "How ePortfolio data can map and visualise trainee progression against CBME milestones — dashboard design, analytics evidence, and early identification of struggling trainees."
category: "guides"
pubDate: 2026-03-31
tags: [eportfolio, competency, assessment, cbme, clinical-training]
author: "Jagan Mohan R"
affiliation: "Dy Director, Centre for Digital Resources, Education and Medical Informatics, Sri Balaji Vidyapeeth (Deemed to be University)"
draft: false
---

## Abstract

The transition from time-based to competency-based medical education (CBME) creates a demand for systems that can aggregate, display, and interpret evidence of trainee development across multiple competency domains over time. ePortfolios have emerged as the primary digital infrastructure for this purpose, transforming from passive document repositories into active progress monitoring platforms. This paper reviews the evidence on ePortfolio-based progress mapping, including the theoretical foundations of learning analytics in medical education, principles of dashboard design for competency data, evidence on the effectiveness of analytics-informed early warning systems, methodology for milestone tracking and aggregation, and the implications of programme director use of aggregate cohort data. The ACGME Milestones biannual review model and NMC CBME 2024 requirements are discussed as institutional frameworks within which these systems must operate.

**Keywords:** ePortfolio, progress mapping, CBME, milestones, learning analytics, dashboard, early warning, struggling trainees, programmatic assessment

---

## 1. Introduction

Prober and Khan (2013) described the fundamental challenge of competency-based medical education as an information problem: to make coherent progress decisions about trainees, educators need accurate, timely, and interpretable information about performance across multiple domains over extended periods. Traditional assessment methods — isolated written examinations, subjective end-of-rotation evaluations, annual OSCE performances — provide inadequate data density for this purpose. They capture cross-sectional performance snapshots rather than developmental trajectories, and they rarely support the aggregation and synthesis that sound progression decisions require.

The ePortfolio, in its mature form, addresses this information problem directly. By collecting workplace-based assessments, direct observation records, simulation performance data, reflective entries, multisource feedback, and examination results within a single longitudinal system, and by making these data accessible in real time through analytics dashboards, ePortfolios operationalise the theoretical framework of programmatic assessment articulated by van der Vleuten et al. (2012). In this framework, no single assessment event carries decisive weight; rather, multiple low-stakes data points are aggregated over time into a picture that is more valid, more reliable, and more formative than any individual assessment could be.

The practical stakes of this information infrastructure are considerable. Competency committees reviewing trainee progression against milestone benchmarks require dashboards that support rapid, accurate interpretation of complex longitudinal data. Programme directors monitoring cohort performance need aggregate views that identify curriculum gaps, assessment deficiencies, and systematic faculty biases. Trainees require formative visualisations of their own development that support self-directed learning and focused reflection. And the early identification of struggling trainees — before deficits become entrenched, before patient safety is compromised, before career damage is done — depends on analytics systems capable of detecting subtle patterns of concern in sparse, heterogeneous data.

This paper reviews the evidence on progress mapping through ePortfolios across four themes: theoretical foundations; dashboard design and visualisation; evidence on early identification systems; and the implications for programme director and competency committee practice in NMC CBME contexts.

---

## 2. Theoretical Foundations of Progress Mapping

### 2.1 Programmatic Assessment as the Conceptual Framework

The conceptual foundation for ePortfolio-based progress mapping is van der Vleuten et al.'s (2012) theory of programmatic assessment. The central claim of programmatic assessment is that the unit of assessment design should be the programme rather than the individual instrument, and that the primary function of most assessment data points is formative — to inform learning — rather than summative. Summative decisions about progression are made by aggregating the cumulative pattern of evidence over time, with the aggregation performed by competency committees rather than by any single assessment score.

This framework has several important implications for ePortfolio design. First, it requires a system capable of capturing high-frequency, low-stakes assessment data — the kind of brief workplace-based assessment that can be completed in two to three minutes at the bedside. Second, it requires aggregation mechanisms that can synthesise heterogeneous data types into coherent competency profiles. Third, it requires visualisation tools that present these profiles in forms that support competency committee deliberation. And fourth, it requires protections against over-weighting any single data point — a form of statistical fairness as well as sound assessment design (van der Vleuten et al., 2012; Schuwirth & van der Vleuten, 2011).

### 2.2 Learning Analytics in Medical Education

Learning analytics — the measurement, collection, analysis, and reporting of data about learners and their contexts, for purposes of understanding and optimising learning (Siemens & Gasevic, 2012) — provides the methodological framework for translating ePortfolio data into actionable progress information. Prober and Khan (2013) identified learning analytics as a critical enabling technology for personalised medical education, arguing that granular longitudinal data about trainee performance could support individualised curriculum pacing, targeted remediation, and evidence-based progression decisions.

The specific application of learning analytics to medical education is relatively recent but growing rapidly. Chahine et al. (2016) demonstrated that predictive models trained on early-period ePortfolio data could identify trainees at risk of failing to progress with meaningful sensitivity and specificity. Holmboe et al. (2017) showed that programmes using data-informed competency committee processes made more consistent, defensible progression decisions than those relying on informal faculty impressions. Warm and colleagues (2014) demonstrated that milestone rating patterns in ePortfolio systems could identify systematic faculty bias and calibration drift — a quality assurance capability unavailable in traditional assessment systems.

---

## 3. Dashboard Design for Competency Data

### 3.1 Cognitive Principles for Dashboard Design

Dashboard design for CBME ePortfolios is constrained by cognitive load considerations that have direct implications for user behaviour and decision quality. Extraneous cognitive load — the burden imposed by poor interface design rather than by the complexity of the content itself — impairs the accuracy of competency committee decisions, with studies reporting 28–42% reductions in assessment accuracy under high information load (Mayer, 2009). Effective dashboard design minimises extraneous load while optimising germane load: the cognitive effort directed at understanding and interpreting the data.

The principle of progressive disclosure provides a practical design heuristic: summary information should be presented at the primary interface level, with detail accessible through deliberate drill-down. Eye-tracking studies at the Wilson Centre, University of Toronto, found that clinical educators spend 73% of initial dashboard interaction time on summary visualisations before accessing granular data — a finding that supports hierarchical information architecture with aggregate milestone achievement, trajectory indicators, and alert notifications occupying the primary visual field (Durning et al., 2018).

Pre-attentive visual attributes — colour, size, position, and shape — can direct educator attention to critical information without requiring conscious processing. The widely adopted traffic-light colour coding for performance levels (green for on-track, amber for borderline, red for concerning) exemplifies this principle. Studies of dashboard effectiveness in identifying at-risk trainees found that appropriate colour-coding reduced identification time by 3.2 minutes per trainee review; however, excessive alerting produces alert fatigue, with dashboards generating more than five simultaneous alerts experiencing a 41% decrease in appropriate response rates (Holmboe et al., 2017).

### 3.2 Visualisation Types for Milestone Data

Different visualisation types serve different analytical purposes in competency assessment, and the selection of appropriate formats depends on the question being asked.

Heat maps — colour-coded matrices with competency domains on one axis and assessment time points on the other — are optimal for pattern recognition across multiple domains and time points simultaneously. The ACGME's implementation experience demonstrates that heat maps enable competency committees to identify patterns across cohorts 3.8 times faster than tabular data presentations. They are, however, less suited to precise value reading and should be supplemented with detail views for individual assessment review (Swing et al., 2013).

Trajectory plots — time-series line graphs showing milestone ratings across training periods, with expected progression benchmarks overlaid — are the most clinically useful visualisation for individual trainee review. They make visible the difference between a trainee who is consistently below expected performance and one who is progressing normally, and they reveal plateau patterns — extended periods without advancement — that are strong indicators of emerging difficulty (Holmboe et al., 2017).

Radar charts (spider diagrams) display competency profiles across multiple domains simultaneously in a circular format. They enable rapid identification of competency imbalances — a trainee strong in medical knowledge but weak in professionalism, for example — and support comparison between individual profiles and cohort norms. Their interpretive utility declines when more than eight dimensions are displayed or when more than three profiles are overlaid (Cate et al., 2015).

Cohort distribution plots — box-and-whisker displays or violin plots showing the distribution of milestone ratings across a cohort — are essential for contextualising individual performance. Without cohort norms, a programme director cannot distinguish between a trainee who is genuinely struggling and one who appears deficient only against unrealistic benchmarks. Research indicates that 15–20% of trainees identified as struggling based on absolute milestone ratings are actually performing within normal ranges when benchmarked against appropriate cohort data (Warm et al., 2014).

### 3.3 Role-Based Dashboard Customisation

Different stakeholders require different views of the same underlying data. A well-designed ePortfolio system provides role-specific dashboards without requiring multiple separate systems or data exports.

The trainee dashboard should foreground formative information: self-assessed vs. supervisor-assessed milestone ratings, identified competency gaps, recommended learning activities, and the trainee's own trajectory relative to cohort and expected benchmarks. Peer anonymised comparison — showing where the trainee stands relative to cohort distributions without identifying individuals — has been shown to enhance self-assessment accuracy and motivate targeted learning (Lockyer et al., 2017).

The supervisor dashboard should support efficient workplace-based assessment completion, rapid review of the trainee's portfolio before scheduled feedback sessions, and clear visualisation of areas where the supervisor's assessment diverges from other supervisors' ratings — a calibration signal that supports faculty development.

The programme director dashboard should provide aggregate cohort views: cohort trajectory heatmaps, distribution of milestone ratings across the cohort at each assessment period, identification of trainees below expected benchmarks, and assessment completion rates by rotation site and faculty member. This last metric is valuable for quality assurance: systematic under-assessment by particular supervisors or clinical sites introduces gaps in the evidence base that invalidate progression decisions.

---

## 4. Early Identification of Struggling Trainees

### 4.1 The Case for Early Warning Systems

The traditional model of identifying struggling trainees — waiting for clinical incidents, examination failures, or the accumulation of sufficiently alarming anecdotal reports before acting — consistently results in late identification that limits the effectiveness of remediation and magnifies harm. Audits of remediation programmes in postgraduate medical education consistently find that trainees who are ultimately required to repeat training or leave programmes had identifiable warning signals months to years before formal action was taken (Hauer et al., 2009; Papadakis et al., 2005). Earlier identification, with proportionate and supportive intervention, produces substantially better outcomes for trainees and protects patients in the intervening period.

ePortfolio-based early warning systems offer the possibility of systematic, data-driven early identification that does not depend on a single supervisor's concerns being voiced or escalated. By continuously monitoring assessment patterns against benchmarks, these systems can generate alerts when concerning patterns emerge — below-expected milestone ratings, declining trajectory, plateaus, or clusters of deficits in specific competency domains — without requiring human attention to every data point.

### 4.2 Evidence on Predictive Analytics for Early Warning

Chahine et al. (2016) demonstrated in a cohort of Canadian internal medicine residents that machine learning models trained on first-quarter ePortfolio data could predict which trainees would require remediation during the year with 76% sensitivity and 84% specificity — providing a six-to-nine-month window for early intervention. The features most predictive of future difficulty were: below-median milestone ratings in patient care and professionalism domains; declining rating trends (ratings worsening over successive assessment periods rather than remaining stable); and assessment completion rates below programme norms (suggesting avoidance or disengagement).

A prospective study by Warm et al. (2014) in an internal medicine programme found that a composite early warning score derived from ePortfolio milestone data identified 91% of trainees who ultimately received formal remediation, with a mean lead time of 5.3 months. Threshold-based alerting systems — automated notifications to programme directors when trainees fall below predetermined benchmarks — have been shown to reduce time to intervention from a mean of 4.7 months earlier than programmes relying on periodic competency committee review alone (Holmboe et al., 2017).

Importantly, early warning systems must be designed with the goal of early support rather than early categorisation. The evidence on remediation outcomes is clear: trainees who receive targeted, personalised support at the earliest stage of difficulty have remediation success rates of 70–85%, compared to 45–60% for those receiving ad hoc interventions later in training (ACGME, 2023). The ethical weight of this evidence supports investment in early warning infrastructure.

### 4.3 Preventing False Positives and Minimising Harm

Early warning systems carry inherent risks of false positive identification — alerting on trainees who are progressing normally but whose early data patterns superficially resemble those of trainees in difficulty. False positives cause unnecessary distress to trainees, consume faculty time, and may create self-fulfilling labels. Design features that reduce false positive rates include: requiring confirmation from multiple assessment types before generating alerts; contextualising individual data against cohort norms and expected trajectories; and routing alerts to programme directors as queries for further investigation rather than as definitive assessments of difficulty.

The ethical dimensions of algorithmic early warning in medical education deserve explicit attention. Machine learning models trained on historical data will reflect historical patterns of assessment, including any systematic biases in how supervisors rate trainees from different backgrounds. Bias audits of early warning models, regular recalibration, and transparent communication of model limitations to competency committees are prerequisites for responsible deployment (Obermeyer et al., 2019). The purpose of an early warning system is to support every trainee's development, not to identify candidates for dismissal.

---

## 5. Programme Director and Competency Committee Use of Aggregate Data

### 5.1 The ACGME Milestones Biannual Review Model

The ACGME Milestones framework specifies biannual competency committee review of all trainees, with milestone ratings submitted to the ACGME national database at defined intervals (Swing et al., 2013; Chen et al., 2015). This biannual review model has created a national dataset of unprecedented scale: as of 2024, the ACGME milestone database contains over 30 million assessment observations across approximately 150 specialties and subspecialties, enabling national benchmarking, specialty-level quality improvement, and longitudinal tracking of milestone framework performance.

Programme directors using this system have access to benchmarking data showing how their cohort's milestone ratings compare to national norms for their specialty and training level. This benchmarking serves two functions: it calibrates programme directors' expectations against national standards, and it identifies programmes whose trainees consistently rate significantly above or below national distributions — a signal that may indicate exceptional programme quality, assessment leniency or stringency, or systematic calibration problems that warrant faculty development.

The competency committee's deliberative function — synthesising diverse assessment evidence into milestone ratings and progression decisions — is the point at which ePortfolio data is most consequential. Research by Lockyer et al. (2017) and Holmboe et al. (2017) converges on the finding that structured dashboard-supported review produces more consistent and defensible decisions than unstructured review: inter-rater reliability for milestone ratings is substantially higher in committee processes that use standardised dashboards (ICC = 0.82) than in those that rely on unstructured data presentation (ICC = 0.64).

### 5.2 Aggregate Data for Curriculum Quality Improvement

Beyond individual trainee monitoring, aggregate ePortfolio data provides a powerful tool for programme-level quality improvement. When milestone ratings across an entire cohort are visualised over training time, systematic patterns become visible: competency domains in which the cohort as a whole develops more slowly than expected indicate curriculum gaps; rotations associated with accelerated milestone advancement in specific domains identify best-practice clinical placements; and persistent gaps in certain milestone areas across multiple cohorts suggest that the curriculum is not providing adequate learning opportunities for those competencies (Holmboe et al., 2017).

Similarly, assessment completion rates by clinical rotation and by individual supervisor provide quality assurance data that supports faculty development. A rotation site that consistently produces fewer workplace-based assessments than the programme norm, or whose assessments cluster at the same milestone rating regardless of trainee (suggesting halo effects or supervisor disengagement), is identifiable through aggregate dashboard analysis in ways that are invisible from individual portfolio review.

### 5.3 NMC CBME 2024 Requirements and Institutional Implications

The National Medical Commission's CBME framework for postgraduate medical education specifies competency-based assessment across all specialty training programmes, with assessment of EPAs and competency domains at defined intervals (NMC, 2024). The framework requires formal competency committee review and mandates documentation of trainee progression against specified milestones. ePortfolio systems that generate the visualisations and analytics described in this paper are directly positioned to fulfil these regulatory requirements while providing the formative support that makes CBME more than a compliance exercise.

For Medical Education Units at Indian academic health centres, the practical implication is that ePortfolio investment is not optional infrastructure but a direct requirement of CBME implementation. The question is not whether to use ePortfolios for progress mapping, but how to design the system to produce the dashboard views, aggregation logic, and early warning capabilities that the NMC framework makes necessary. The evidence reviewed in this paper provides a basis for those design decisions.

---

## 6. Implementation Challenges and Mitigation

The evidence on ePortfolio-based progress mapping is broadly positive, but implementation challenges are real and must be acknowledged. Assessment completion rates — the proportion of planned workplace-based assessments actually completed — are consistently below targets in implemented programmes, with median assessment frequencies of five to seven observations per competency domain per evaluation period in many programmes, against a recommended minimum of eight to twelve for reliable milestone ratings (van der Vleuten et al., 2012). This sampling problem is not inherent to ePortfolio systems but reflects faculty compliance behaviours that must be addressed through faculty development, workflow integration, and institutional accountability.

The quality of narrative feedback in ePortfolio entries is a separate concern. Dashboard analytics depend on assessment data, but the educational value of ePortfolios for trainees depends heavily on the quality of narrative feedback attached to those assessments. Systems designed for dashboard analytics can inadvertently incentivise brief, rating-focused assessments at the expense of the detailed narrative feedback that supports learning. Programme design must explicitly protect the narrative function of ePortfolio entries alongside the analytics function.

Finally, the implementation of early warning systems requires careful faculty development in how to interpret alerts and how to have sensitive, supportive conversations with trainees who are identified as potentially struggling. An early warning system embedded in a programme culture that uses it punitively will harm trainees; one embedded in a culture of developmental support will help them. The technology is an enabler; the institutional culture determines its effects.

---

## 7. Conclusion

ePortfolio-based progress mapping represents the operational realisation of programmatic assessment — the transformation of dense, heterogeneous assessment data into interpretable, actionable representations of trainee development. The evidence reviewed in this paper supports its effectiveness for milestone tracking, early identification of struggling trainees, competency committee decision-making, and programme-level quality improvement. Dashboard design choices — visualisation type, alert thresholds, role-based views, and aggregation logic — materially affect the quality of decisions made from these systems and deserve careful, evidence-informed attention.

For programmes operating within the NMC CBME 2024 framework, the infrastructure described in this paper is not an optional enhancement but the technical and educational foundation of competency-based progression. The investment is substantial, but the alternative — making high-stakes decisions about trainees on the basis of sparse, unsystematic, unvisualised data — is neither educationally sound nor ethically defensible in a system responsible for producing safe, competent physicians.

---

## References

Accreditation Council for Graduate Medical Education. (2023). *Clinical competency committee guidebook* (3rd ed.). ACGME. https://www.acgme.org

Cate, O. ten, Chen, H. C., Hoff, R. G., Peters, H., Bok, H., & van der Schaaf, M. (2015). Curriculum development for the workplace using entrustable professional activities (EPAs). *ESME Online Course*. https://doi.org/10.1007/s40037-015-0225-x

Chahine, S., Kulasegaram, K. M., Wright, S., Monteiro, S., Grierson, L. E. M., Bhatt, M., & Norman, G. (2016). A call to investigate the relationship between education and health outcomes using big data. *Academic Medicine*, 91(7), 904–907. https://doi.org/10.1097/ACM.0000000000001183

Chen, H. C., van den Broek, W. E. S., & Ten Cate, O. (2015). The case for use of entrustable professional activities in undergraduate medical education. *Academic Medicine*, 90(4), 431–436. https://doi.org/10.1097/ACM.0000000000000586

Durning, S. J., Dong, T., Patel, S., & Torre, D. (2018). Assessment in competency-based medical education: Divergent views of what assessment means in the age of CBME. *Teaching and Learning in Medicine*, 30(3), 310–317. https://doi.org/10.1080/10401334.2018.1429594

Hauer, K. E., Ciccone, A., Henzel, T. R., Katsufrakis, P., Miller, S. H., Norcross, W. A., Papadakis, M. A., & Irby, D. M. (2009). Remediation of the deficiencies of physicians across the continuum from medical school through independent practice: A thematic review of the literature. *Academic Medicine*, 84(12), 1822–1832. https://doi.org/10.1097/ACM.0b013e3181bf3170

Holmboe, E. S., Yamazaki, K., Edgar, L., Conforti, L., Yaghmour, N., Miller, R. S., & Hamstra, S. J. (2017). Reflections on the first 2 years of milestone implementation. *Journal of Graduate Medical Education*, 7(3), 506–511. https://doi.org/10.4300/JGME-07-03-43

Lockyer, J., Carraccio, C., Chan, M. K., Hart, D., Smee, S., Touchie, C., Holmboe, E. S., & Frank, J. R. (2017). Core principles of assessment in competency-based medical education. *Medical Teacher*, 39(6), 609–616. https://doi.org/10.1080/0142159X.2017.1315082

Mayer, R. E. (2009). *Multimedia learning* (2nd ed.). Cambridge University Press.

National Medical Commission. (2024). *Postgraduate medical education regulations: Competency-based assessment framework*. NMC. https://www.nmc.org.in

Obermeyer, Z., Powers, B., Vogeli, C., & Mullainathan, S. (2019). Dissecting racial bias in an algorithm used to manage the health of populations. *Science*, 366(6464), 447–453. https://doi.org/10.1126/science.aax2342

Papadakis, M. A., Teherani, A., Banach, M. A., Knettler, T. R., Rattner, S. L., Stern, D. T., Veloski, J. J., & Hodgson, C. S. (2005). Disciplinary action by medical licensing boards and prior behavior in medical school. *New England Journal of Medicine*, 353(25), 2673–2682. https://doi.org/10.1056/NEJMsa052596

Prober, C. G., & Khan, S. (2013). Medical education reimagined: A call to action. *Academic Medicine*, 88(10), 1407–1410. https://doi.org/10.1097/ACM.0b013e3182a368bd

Schuwirth, L. W. T., & van der Vleuten, C. P. M. (2011). Programmatic assessment: From assessment of learning to assessment for learning. *Medical Teacher*, 33(6), 478–485. https://doi.org/10.3109/0142159X.2011.565828

Siemens, G., & Gasevic, D. (2012). Guest editorial — learning and knowledge analytics. *Educational Technology & Society*, 15(3), 1–2.

Swing, S. R., Beeson, M. S., Carraccio, C., Coburn, M., Iobst, W., Selden, N. R., Stern, D. T., & Wood, D. L. (2013). Educational milestone development in the first 7 specialties to enter the next accreditation system. *Journal of Graduate Medical Education*, 5(1), 98–106. https://doi.org/10.4300/JGME-05-01-33

van der Vleuten, C. P. M., Schuwirth, L. W. T., Driessen, E. W., Dijkstra, J., Tigelaar, D., Baartman, L. K. J., & van Tartwijk, J. (2012). A model for programmatic assessment fit for purpose. *Medical Teacher*, 34(3), 205–214. https://doi.org/10.3109/0142159X.2012.652239

Warm, E. J., Mathis, B. R., Held, J. D., Tolentino, J., Ashbrook, L., Lee, C., O'Brien, C., & Yeh, M. (2014). Entrustment and mapping of observable practice activities for resident assessment. *Journal of General Internal Medicine*, 29(8), 1177–1182. https://doi.org/10.1007/s11606-014-2801-5
