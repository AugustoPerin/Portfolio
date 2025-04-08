import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Cloud,
  Database,
  Server,
  Shield,
  Code,
  BarChart,
  Brain,
  ChevronRight,
} from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-sm border-b border-slate-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-slate-800">Augusto Perin</div>
          <nav className="hidden md:flex space-x-6">
            <a href="#about" className="text-slate-600 hover:text-slate-900 transition">
              About
            </a>
            <a href="#experience" className="text-slate-600 hover:text-slate-900 transition">
              Experience
            </a>
            <a href="#skills" className="text-slate-600 hover:text-slate-900 transition">
              Skills
            </a>
            <a href="#certifications" className="text-slate-600 hover:text-slate-900 transition">
              Certifications
            </a>
            <a href="#education" className="text-slate-600 hover:text-slate-900 transition">
              Education
            </a>
            <a href="#contact" className="text-slate-600 hover:text-slate-900 transition">
              Contact
            </a>
          </nav>
          <Button variant="outline" size="sm" className="md:hidden">
            Menu
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">AWS Certified Solutions Architect Professional</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Augusto de Oliveira Perin</h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-6">
              AWS Cloud Engineer, Data Specialist, Solutions Architect
            </p>
            <p className="text-slate-300 mb-8">4+ years of experience in AWS and data-driven solutions.</p>
            <div className="flex flex-wrap gap-3">
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <a href="#contact">Get in Touch</a>
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                <a href="#experience">View Experience</a>
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20">
            <Image src="/images/profile.png" alt="Augusto Perin" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">About Me</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-lg text-slate-700 mb-6">
              I'm an AWS Cloud Engineer and Solutions Architect with over 4 years of experience designing and
              implementing scalable, secure, and cost-effective cloud solutions. I specialize in AWS architecture,
              DevOps practices, and data-driven solutions.
            </p>
            <p className="text-lg text-slate-700 mb-6">
              My expertise includes infrastructure automation, containerization with Kubernetes, and implementing data
              processing pipelines using AWS services like Glue, Athena, and S3.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="https://linkedin.com/in/augustoperin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition"
              >
                <Linkedin size={20} />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://github.com/AugustoPerin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-700 hover:text-blue-600 transition"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
              <div className="flex items-center gap-2 text-slate-700">
                <MapPin size={20} />
                <span>Salvador, Bahia, Brazil</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Professional Experience</h2>

          <div className="max-w-4xl mx-auto">
            {/* VX Case */}
            <div className="mb-12 relative pl-8 border-l-2 border-blue-500">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-500"></div>
              <div className="mb-2">
                <Badge className="mb-2">January 2022 - Present</Badge>
                <h3 className="text-2xl font-bold text-slate-800">AWS Cloud and DevOps Engineer</h3>
                <p className="text-lg text-blue-600">VX Case</p>
              </div>
              <ul className="mt-4 space-y-3">
                <li className="flex gap-2">
                  <ChevronRight className="flex-shrink-0 h-6 w-6 text-blue-500" />
                  <p className="text-slate-700">
                    Led the migration of company infrastructure to AWS EKS (Elastic Kubernetes Service).
                  </p>
                </li>
                <li className="flex gap-2">
                  <ChevronRight className="flex-shrink-0 h-6 w-6 text-blue-500" />
                  <p className="text-slate-700">
                    Achieved 91% reduction in data storage costs through implementation of AWS S3 and Athena.
                  </p>
                </li>
                <li className="flex gap-2">
                  <ChevronRight className="flex-shrink-0 h-6 w-6 text-blue-500" />
                  <p className="text-slate-700">
                    Led migration of 1 TB daily data using AWS Glue with Spark backend for automated data processing
                    pipelines.
                  </p>
                </li>
                <li className="flex gap-2">
                  <ChevronRight className="flex-shrink-0 h-6 w-6 text-blue-500" />
                  <p className="text-slate-700">
                    Communicated complex technical concepts to non-technical stakeholders, ensuring alignment of cloud
                    initiatives.
                  </p>
                </li>
              </ul>
            </div>

            {/* RU Contabilidade */}
            <div className="relative pl-8 border-l-2 border-blue-500">
              <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-500"></div>
              <div className="mb-2">
                <Badge className="mb-2">January 2021 - December 2021</Badge>
                <h3 className="text-2xl font-bold text-slate-800">Junior Solutions Architect</h3>
                <p className="text-lg text-blue-600">RU Contabilidade</p>
              </div>
              <ul className="mt-4 space-y-3">
                <li className="flex gap-2">
                  <ChevronRight className="flex-shrink-0 h-6 w-6 text-blue-500" />
                  <p className="text-slate-700">
                    Implemented Python scripts to automate repetitive tasks, increasing operational efficiency.
                  </p>
                </li>
                <li className="flex gap-2">
                  <ChevronRight className="flex-shrink-0 h-6 w-6 text-blue-500" />
                  <p className="text-slate-700">
                    Achieved 94% reduction in processing time by automating Excel spreadsheet tasks (from 3 hours to 10
                    minutes daily).
                  </p>
                </li>
                <li className="flex gap-2">
                  <ChevronRight className="flex-shrink-0 h-6 w-6 text-blue-500" />
                  <p className="text-slate-700">
                    Managed SQL queries to extract and manipulate data from MySQL database, ensuring data integrity.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Technical Skills</h2>

          <Tabs defaultValue="aws" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-8">
              <TabsTrigger value="aws">AWS Services</TabsTrigger>
              <TabsTrigger value="cloud">Cloud & DevOps</TabsTrigger>
              <TabsTrigger value="data">Data Science</TabsTrigger>
              <TabsTrigger value="other">Other Skills</TabsTrigger>
            </TabsList>

            <TabsContent value="aws" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <SkillCard
                  icon={<Server className="h-6 w-6 text-orange-500" />}
                  title="Computing"
                  skills={["EC2", "Lambda", "ECS", "EKS"]}
                />
                <SkillCard
                  icon={<Database className="h-6 w-6 text-blue-500" />}
                  title="Storage"
                  skills={["S3", "EBS", "Glacier", "SQS", "SNS"]}
                />
                <SkillCard
                  icon={<Database className="h-6 w-6 text-green-500" />}
                  title="Database"
                  skills={[
                    "RDS (MySQL, PostgreSQL, SQL Server)",
                    "Aurora",
                    "DocumentDB",
                    "MongoDB",
                    "DynamoDB",
                    "Redshift",
                  ]}
                />
                <SkillCard
                  icon={<Cloud className="h-6 w-6 text-purple-500" />}
                  title="Networks"
                  skills={["VPC", "Route 53", "Direct Connect"]}
                />
                <SkillCard
                  icon={<Shield className="h-6 w-6 text-red-500" />}
                  title="Security"
                  skills={["IAM", "KMS", "Security Groups", "WAF", "Shield", "Security Hub", "Guard Duty"]}
                />
                <SkillCard
                  icon={<BarChart className="h-6 w-6 text-indigo-500" />}
                  title="Data Analysis"
                  skills={["Glue", "Athena", "Redshift", "EMR", "Kinesis"]}
                />
              </div>
            </TabsContent>

            <TabsContent value="cloud" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SkillCard
                  icon={<Cloud className="h-6 w-6 text-blue-500" />}
                  title="Cloud Solutions Architecture"
                  skills={["Architecture design", "Implementation", "Cost optimization", "Scalable solutions"]}
                />
                <SkillCard
                  icon={<Code className="h-6 w-6 text-green-500" />}
                  title="DevOps"
                  skills={["Infrastructure automation", "CI/CD", "Continuous deployment", "Continuous delivery"]}
                />
                <SkillCard
                  icon={<Server className="h-6 w-6 text-purple-500" />}
                  title="Containers & Orchestration"
                  skills={["Kubernetes", "EKS", "Docker"]}
                />
                <SkillCard
                  icon={<Code className="h-6 w-6 text-orange-500" />}
                  title="Infrastructure as Code (IaC)"
                  skills={["Terraform", "CloudFormation"]}
                />
              </div>
            </TabsContent>

            <TabsContent value="data" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SkillCard
                  icon={<Brain className="h-6 w-6 text-blue-500" />}
                  title="Machine Learning"
                  skills={["SageMaker", "Amazon Forecast", "Rekognition", "Comprehend"]}
                />
                <SkillCard
                  icon={<Code className="h-6 w-6 text-green-500" />}
                  title="Data Science Libraries"
                  skills={[
                    "Pandas",
                    "Polars",
                    "Numpy",
                    "PySpark",
                    "Dask",
                    "TensorFlow",
                    "Keras",
                    "Scikit-Learn",
                    "OpenCV",
                  ]}
                />
              </div>
            </TabsContent>

            <TabsContent value="other" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SkillCard
                  icon={<Code className="h-6 w-6 text-blue-500" />}
                  title="Programming Languages"
                  skills={["Python", "Bash"]}
                />
                <SkillCard
                  icon={<Database className="h-6 w-6 text-green-500" />}
                  title="Database"
                  skills={["PostgreSQL", "MySQL", "Microsoft SQL Server", "MongoDB"]}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Certifications</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Card className="border-2 border-orange-100 hover:border-orange-200 transition">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4 h-16">
                <Image
                    src="/images/aws-solutions-architect.png"
                    alt="AWS Certified Solutions Architect Professional"
                    width={64}
                    height={64}
                  />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">AWS Certified Solutions Architect Professional</h3>
                <p className="text-center text-slate-500">Expires April 2, 2028</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-100 hover:border-blue-200 transition">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4 h-16">
                  <Image
                    src="/images/aws-cloud-practitioner.png"
                    alt="AWS Certified Cloud Practitioner"
                    width={64}
                    height={64}
                  />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">AWS Certified Cloud Practitioner</h3>
                <p className="text-center text-slate-500">Expires April 2, 2028</p>
              </CardContent>
            </Card>

            <Card className="border-2 border-green-100 hover:border-green-200 transition">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4 h-16">
                  <Image
                    src="/images/tensorflow-developer.png"
                    alt="TensorFlow Developer Certificate"
                    width={64}
                    height={64}
                  />
                </div>
                <h3 className="text-xl font-bold text-center mb-2">TensorFlow Developer Certificate</h3>
                <p className="text-center text-slate-500">Expires May 15, 2027</p>
              </CardContent>
            </Card>
          </div>

          <div className="mt-12 max-w-4xl mx-auto">
            <h3 className="text-xl font-bold mb-6 text-slate-800">Additional Courses & Certificates</h3>
            <ul className="space-y-3">
              <li className="flex gap-2">
                <ChevronRight className="flex-shrink-0 h-6 w-6 text-blue-500" />
                <p className="text-slate-700">IBM AI Engineering Professional Certificate (V2) – IBM</p>
              </li>
              <li className="flex gap-2">
                <ChevronRight className="flex-shrink-0 h-6 w-6 text-blue-500" />
                <p className="text-slate-700">Data Science Professional Certificate (V2) – IBM</p>
              </li>
              <li className="flex gap-2">
                <ChevronRight className="flex-shrink-0 h-6 w-6 text-blue-500" />
                <p className="text-slate-700">Machine Learning Engineering for Production (MLOps) – DeepLearning.AI</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-slate-800">Education</h2>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardContent className="p-6">
                <Badge className="mb-2">July 2024 - July 2026 (Studying)</Badge>
                <h3 className="text-xl font-bold mb-2">Master in Computer Science</h3>
                <p className="text-slate-600 mb-2">Data Science Research Topic</p>
                <p className="text-slate-700">UFBA (Federal University of Bahia)</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Badge className="mb-2">January 2020 - June 2024 (Completed)</Badge>
                <h3 className="text-xl font-bold mb-2">Degree in Computer Engineering</h3>
                <p className="text-slate-700">UNIFACS (Salvador University)</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center text-slate-800">Languages</h2>

          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Portuguese</h3>
                <p className="text-slate-600">Native</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">English</h3>
                <p className="text-slate-600">Advanced</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6 text-center">
                <h3 className="text-xl font-bold mb-2">Spanish</h3>
                <p className="text-slate-600">Basic</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Get In Touch</h2>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-600 rounded-full">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Phone</h3>
                    <p className="text-blue-200">+55 71 98155-7226</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-600 rounded-full">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Email</h3>
                    <p className="text-blue-200">augustooperin@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-600 rounded-full">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Location</h3>
                    <p className="text-blue-200">Salvador, Bahia, Brazil</p>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-600 rounded-full">
                    <Linkedin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">LinkedIn</h3>
                    <a
                      href="https://linkedin.com/in/augustoperin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-200 hover:text-blue-100 transition"
                    >
                      linkedin.com/in/augustoperin
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition md:col-span-2">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-blue-600 rounded-full">
                    <Github className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">GitHub</h3>
                    <a
                      href="https://github.com/AugustoPerin"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-200 hover:text-blue-100 transition"
                    >
                      github.com/AugustoPerin
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <p className="text-lg text-blue-200">
                I'm always open to discussing new projects, opportunities, or partnerships.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-slate-900 text-slate-400 text-center">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Augusto de Oliveira Perin. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}

// Skill Card Component
function SkillCard({ icon, title, skills }) {
  return (
    <Card className="h-full">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          {icon}
          <h3 className="font-bold text-lg">{title}</h3>
        </div>
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li key={index} className="text-slate-700">
              {skill}
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  )
}
