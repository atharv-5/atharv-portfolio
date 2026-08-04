export interface Certification {
  title: string;
  issuer: string;
  durationOrDate: string;
  description: string;
  credlyUrl?: string;
  githubAssetUrl?: string;
}

export const CERTIFICATES_REPO_URL = "https://github.com/atharv-5/certificates-and-badges";
export const CREDLY_PROFILE_URL = "https://www.credly.com/users/atharv-gehlod";

export const certifications: Certification[] = [
  {
    title: "AWS Academy Graduate — AWS Academy Cloud Foundations",
    issuer: "Amazon Web Services (AWS)",
    durationOrDate: "Issued Sep 2025",
    description:
      "Official AWS Academy certification validating foundational knowledge of cloud security, core services (EC2, S3, IAM), architecture, and cloud economics.",
    credlyUrl: "https://www.credly.com/org/amazon-web-services/badge/aws-academy-graduate-aws-academy-cloud-foundations",
    githubAssetUrl: "https://github.com/atharv-5/certificates-and-badges/blob/main/aws-academy-graduate-aws-academy-cloud-foundations.png",
  },
  {
    title: "AWS Knowledge — Cloud Essentials",
    issuer: "Amazon Web Services (AWS)",
    durationOrDate: "Issued 2025",
    description:
      "Badge credential demonstrating proficiency in fundamental AWS cloud concepts, enterprise infrastructure, and security compliance.",
    credlyUrl: "https://www.credly.com/org/amazon-web-services/badge/aws-knowledge-cloud-essentials",
    githubAssetUrl: "https://github.com/atharv-5/certificates-and-badges/blob/main/aws-knowledge-cloud-essentials-training-badge.png",
  },
  {
    title: "Data Analytics Essentials",
    issuer: "Cisco Networking Academy",
    durationOrDate: "Issued 2025",
    description:
      "Credential covering data collection, cleaning, data modeling, exploratory data analysis, and business visualization.",
    credlyUrl: "https://www.credly.com/org/cisco/badge/data-analytics-essentials",
    githubAssetUrl: "https://github.com/atharv-5/certificates-and-badges",
  },
  {
    title: "SQL and Relational Databases",
    issuer: "IBM SkillsBuild",
    durationOrDate: "Issued 2025",
    description:
      "Comprehensive certification on relational database design, schema normalization, and advanced SQL querying.",
    credlyUrl: "https://www.credly.com/org/ibm/badge/sql-and-relational-databases-101",
    githubAssetUrl: "https://github.com/atharv-5/certificates-and-badges",
  },
  {
    title: "NoSQL and DBaaS Fundamentals",
    issuer: "IBM SkillsBuild",
    durationOrDate: "Issued 2025",
    description:
      "Certification validating proficiency in document-store data modeling, MongoDB schemas, and Database-as-a-Service.",
    credlyUrl: "https://www.credly.com/org/ibm/badge/nosql-and-dbaas-101",
    githubAssetUrl: "https://github.com/atharv-5/certificates-and-badges",
  },
  {
    title: "Artificial Intelligence Fundamentals & Ethics",
    issuer: "IBM SkillsBuild",
    durationOrDate: "Issued 2025",
    description:
      "Credentials covering machine learning models, neural networks, natural language processing, and responsible AI governance.",
    credlyUrl: "https://www.credly.com/org/ibm/badge/artificial-intelligence-fundamentals",
    githubAssetUrl: "https://github.com/atharv-5/certificates-and-badges/blob/main/artificial-intelligence-fundamentals.png",
  },
];
