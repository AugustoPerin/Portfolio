"use client"

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
  ArrowDown,
} from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { AnimatedText } from "@/components/ui/animated-text"
import { AnimatedCard } from "@/components/ui/animated-card"
import { SectionHeading } from "@/components/ui/section-heading"
import { TechGrid } from "@/components/ui/tech-grid"
import { ParticleBackground } from "@/components/ui/particle-background"
import { MobileMenu } from "@/components/ui/mobile-menu"
import { ScrollIndicator } from "@/components/ui/scroll-indicator"

// Skill Card Component
function SkillCard({ icon, title, skills, delay = 0 }) {
  return (
    <AnimatedCard delay={delay} className="h-full">
      <Card className="h-full border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ delay: delay + 0.2, duration: 0.4 }}
              viewport={{ once: true }}
              className="text-blue-500 dark:text-blue-400"
            >
              {icon}
            </motion.div>
            <motion.h3
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: delay + 0.3, duration: 0.4 }}
              viewport={{ once: true }}
              className="font-bold text-lg"
            >
              {title}
            </motion.h3>
          </div>
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: delay + 0.4, duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-2"
          >
            {skills.map((skill, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: delay + 0.4 + index * 0.1, duration: 0.3 }}
                viewport={{ once: true }}
                className="text-slate-700 dark:text-slate-300"
              >
                {skill}
              </motion.li>
            ))}
          </motion.ul>
        </CardContent>
      </Card>
    </AnimatedCard>
  )
}

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <ScrollIndicator />
      <ParticleBackground />

      {/* Header/Navigation */}
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-white/80 dark:bg-slate-900/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-700"
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="font-bold text-xl text-slate-800 dark:text-white"
          >
            Augusto Perin
          </motion.div>
          <nav className="hidden md:flex space-x-6">
            {["about", "experience", "skills", "certifications", "education", "contact"].map((item, i) => (
              <motion.a
                key={item}
                href={`#${item}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i, duration: 0.5 }}
                className="text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors relative group"
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 group-hover:w-full" />
              </motion.a>
            ))}
          </nav>
          <MobileMenu />
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] opacity-10" />
        </div>
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center relative z-10">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <Badge className="mb-4 bg-blue-600 hover:bg-blue-700">
                AWS Certified Solutions Architect Professional
              </Badge>
            </motion.div>
            <AnimatedText text="Augusto de Oliveira Perin" className="text-4xl md:text-5xl font-bold mb-4" />
            <AnimatedText
              text="AWS Cloud Engineer, Data Specialist, Solutions Architect"
              className="text-xl md:text-2xl text-slate-300 mb-6"
              once
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="text-slate-300 mb-8"
            >
              4+ years of experience in AWS and data-driven solutions.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="flex flex-wrap gap-3"
            >
              <Button asChild className="bg-blue-600 hover:bg-blue-700 group relative overflow-hidden">
                <a href="#contact">
                  <span className="relative z-10">Get in Touch</span>
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-700 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              </Button>
              <Button variant="outline" className="border-white text-black hover:bg-white/10" asChild>
                <a href="#experience">View Experience</a>
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white/20">
              <Image src="/images/profile.jpg" alt="Augusto Perin" fill className="object-cover" />
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.5, 0] }}
                transition={{ delay: 1, duration: 2, repeat: Number.POSITIVE_INFINITY, repeatDelay: 3 }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500/30 to-indigo-500/30"
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{ delay: 1.5, duration: 2, repeat: Number.POSITIVE_INFINITY }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70"
        >
          <ArrowDown className="h-6 w-6" />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <SectionHeading>About Me</SectionHeading>
          <div className="max-w-3xl mx-auto">
            <AnimatedText
              text="I'm an AWS Cloud Engineer and Solutions Architect with over 4 years of experience designing and implementing scalable, secure, and cost-effective cloud solutions. I specialize in AWS architecture, DevOps practices, and data-driven solutions."
              className="text-lg text-slate-700 dark:text-slate-300 mb-6"
              once
            />
            <AnimatedText
              text="My expertise includes infrastructure automation, containerization with Kubernetes, and implementing data processing pipelines using AWS services like Glue, Athena, and S3."
              className="text-lg text-slate-700 dark:text-slate-300 mb-6"
              once
            />
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <a
                href="https://linkedin.com/in/augustoperin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                <Linkedin
                  size={20}
                  className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                />
                <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:transition-all group-hover:after:w-full">
                  LinkedIn
                </span>
              </a>
              <a
                href="https://github.com/AugustoPerin"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors group"
              >
                <Github
                  size={20}
                  className="group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors"
                />
                <span className="relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-600 dark:after:bg-blue-400 after:transition-all group-hover:after:w-full">
                  GitHub
                </span>
              </a>
              <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300">
                <MapPin size={20} className="text-blue-500" />
                <span>Salvador, Bahia, Brazil</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <SectionHeading>Professional Experience</SectionHeading>

          <div className="max-w-4xl mx-auto">
            {/* VX Case */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-12 relative pl-8 border-l-2 border-blue-500"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true }}
                className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-500"
              />
              <div className="mb-2">
                <Badge className="mb-2">January 2022 - Present</Badge>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-slate-800 dark:text-slate-100"
                >
                  AWS Cloud and DevOps Engineer
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="text-lg text-blue-600 dark:text-blue-400"
                >
                  VX Case
                </motion.p>
              </div>
              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5, staggerChildren: 0.1 }}
                viewport={{ once: true }}
                className="mt-4 space-y-3"
              >
                {[
                  "Led the migration of company infrastructure to AWS EKS (Elastic Kubernetes Service).",
                  "Achieved 91% reduction in data storage costs through implementation of AWS S3 and Athena.",
                  "Led migration of 1 TB daily data using AWS Glue with Spark backend for automated data processing pipelines.",
                  "Communicated complex technical concepts to non-technical stakeholders, ensuring alignment of cloud initiatives.",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-2"
                  >
                    <ChevronRight className="flex-shrink-0 h-6 w-6 text-blue-500" />
                    <p className="text-slate-700 dark:text-slate-300">{item}</p>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* RU Contabilidade */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative pl-8 border-l-2 border-blue-500"
            >
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                viewport={{ once: true }}
                className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-500"
              />
              <div className="mb-2">
                <Badge className="mb-2">January 2021 - December 2021</Badge>
                <motion.h3
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="text-2xl font-bold text-slate-800 dark:text-slate-100"
                >
                  Junior Solutions Architect
                </motion.h3>
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="text-lg text-blue-600 dark:text-blue-400"
                >
                  RU Contabilidade
                </motion.p>
              </div>
              <motion.ul
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7, staggerChildren: 0.1 }}
                viewport={{ once: true }}
                className="mt-4 space-y-3"
              >
                {[
                  "Implemented Python scripts to automate repetitive tasks, increasing operational efficiency.",
                  "Achieved 94% reduction in processing time by automating Excel spreadsheet tasks (from 3 hours to 10 minutes daily).",
                  "Managed SQL queries to extract and manipulate data from MySQL database, ensuring data integrity.",
                ].map((item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex gap-2"
                  >
                    <ChevronRight className="flex-shrink-0 h-6 w-6 text-blue-500" />
                    <p className="text-slate-700 dark:text-slate-300">{item}</p>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <SectionHeading>Technical Skills</SectionHeading>

          <Tabs defaultValue="aws" className="max-w-4xl mx-auto">
            <TabsList className="grid grid-cols-4 mb-8 bg-slate-100 dark:bg-slate-800">
              <TabsTrigger value="aws" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                AWS Services
              </TabsTrigger>
              <TabsTrigger value="cloud" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Cloud & DevOps
              </TabsTrigger>
              <TabsTrigger value="data" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Data Science
              </TabsTrigger>
              <TabsTrigger value="other" className="data-[state=active]:bg-blue-500 data-[state=active]:text-white">
                Other Skills
              </TabsTrigger>
            </TabsList>

            <TabsContent value="aws" className="space-y-4">
              <TechGrid>
                <SkillCard
                  icon={<Server className="h-6 w-6 text-orange-500" />}
                  title="Computing"
                  skills={["EC2", "Lambda", "ECS", "EKS"]}
                  delay={0.1}
                />
                <SkillCard
                  icon={<Database className="h-6 w-6 text-blue-500" />}
                  title="Storage"
                  skills={["S3", "EBS", "EFS", "FSx", "Glacier"]}
                  delay={0.2}
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
                  delay={0.3}
                />
                <SkillCard
                  icon={<Cloud className="h-6 w-6 text-purple-500" />}
                  title="Networks"
                  skills={["VPC", "PrivateLink", "VPN", "Route 53", "Direct Connect"]}
                  delay={0.4}
                />
                <SkillCard
                  icon={<Shield className="h-6 w-6 text-red-500" />}
                  title="Security"
                  skills={["IAM", "KMS", "Security Groups", "WAF", "Shield", "Security Hub", "Guard Duty"]}
                  delay={0.5}
                />
                <SkillCard
                  icon={<BarChart className="h-6 w-6 text-indigo-500" />}
                  title="Data Analysis"
                  skills={["Glue", "Athena", "Redshift", "EMR"]}
                  delay={0.6}
                />
              </TechGrid>
            </TabsContent>

            <TabsContent value="cloud" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SkillCard
                  icon={<Cloud className="h-6 w-6 text-blue-500" />}
                  title="Cloud Solutions Architecture"
                  skills={["Architecture design", "Implementation", "Cost optimization", "Scalable solutions"]}
                  delay={0.1}
                />
                <SkillCard
                  icon={<Code className="h-6 w-6 text-green-500" />}
                  title="DevOps"
                  skills={["Infrastructure automation", "CI/CD", "Continuous deployment", "Continuous delivery"]}
                  delay={0.2}
                />
                <SkillCard
                  icon={<Server className="h-6 w-6 text-purple-500" />}
                  title="Containers & Orchestration"
                  skills={["Kubernetes", "EKS", "Docker", "Step Functions"]}
                  delay={0.3}
                />
                <SkillCard
                  icon={<Code className="h-6 w-6 text-orange-500" />}
                  title="Infrastructure as Code (IaC)"
                  skills={["Terraform", "CloudFormation"]}
                  delay={0.4}
                />
              </div>
            </TabsContent>

            <TabsContent value="data" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SkillCard
                  icon={<Brain className="h-6 w-6 text-blue-500" />}
                  title="Machine Learning"
                  skills={["SageMaker", "Amazon Forecast", "Rekognition", "Comprehend"]}
                  delay={0.1}
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
                  delay={0.2}
                />
              </div>
            </TabsContent>

            <TabsContent value="other" className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SkillCard
                  icon={<Code className="h-6 w-6 text-blue-500" />}
                  title="Programming Languages"
                  skills={["Python", "Bash"]}
                  delay={0.1}
                />
                <SkillCard
                  icon={<Database className="h-6 w-6 text-green-500" />}
                  title="Database"
                  skills={["PostgreSQL", "MySQL", "Microsoft SQL Server", "MongoDB"]}
                  delay={0.2}
                />
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="py-20 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <SectionHeading>Certifications</SectionHeading>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                image: "/images/aws-solutions-architect.png",
                title: "AWS Certified Solutions Architect Professional",
                expiry: "Expires April 2, 2028",
                borderColor: "border-orange-100 dark:border-orange-900",
                hoverColor: "hover:border-orange-200 dark:hover:border-orange-800",
              },
              {
                image: "/images/aws-cloud-practitioner.png",
                title: "AWS Certified Cloud Practitioner",
                expiry: "Expires April 2, 2028",
                borderColor: "border-blue-100 dark:border-blue-900",
                hoverColor: "hover:border-blue-200 dark:hover:border-blue-800",
              },
              {
                image: "/images/tensorflow-developer.png",
                title: "TensorFlow Developer Certificate",
                expiry: "Expires May 15, 2027",
                borderColor: "border-green-100 dark:border-green-900",
                hoverColor: "hover:border-green-200 dark:hover:border-green-800",
              },
            ].map((cert, index) => (
              <AnimatedCard key={index} delay={0.1 * index} direction="up">
                <Card
                  className={`border-2 ${cert.borderColor} ${cert.hoverColor} transition-all duration-300 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm hover:shadow-lg`}
                >
                  <CardContent className="p-6">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-center mb-4 h-16"
                    >
                      <Image src={cert.image || "/placeholder.svg"} alt={cert.title} width={100} height={100} />
                    </motion.div>
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-xl font-bold text-center mb-2"
                    >
                      {cert.title}
                    </motion.h3>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-center text-slate-500 dark:text-slate-400"
                    >
                      {cert.expiry}
                    </motion.p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 max-w-4xl mx-auto"
          >
            <h3 className="text-xl font-bold mb-6 text-slate-800 dark:text-slate-100">
              Additional Courses & Certificates
            </h3>
            <ul className="space-y-3">
              {[
                "IBM AI Engineering Professional Certificate (V2) – IBM",
                "Data Science Professional Certificate (V2) – IBM",
                "Machine Learning Engineering for Production (MLOps) – DeepLearning.AI",
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex gap-2"
                >
                  <ChevronRight className="flex-shrink-0 h-6 w-6 text-blue-500" />
                  <p className="text-slate-700 dark:text-slate-300">{item}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 bg-white dark:bg-slate-900">
        <div className="container mx-auto px-4">
          <SectionHeading>Education</SectionHeading>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                period: "July 2024 - July 2026 (Studying)",
                title: "Master in Computer Science",
                subtitle: "Data Science Research Topic",
                institution: "UFBA (Federal University of Bahia)",
              },
              {
                period: "January 2020 - June 2024 (Completed)",
                title: "Degree in Computer Engineering",
                subtitle: "",
                institution: "UNIFACS (Salvador University)",
              },
            ].map((edu, index) => (
              <AnimatedCard key={index} delay={0.2 * index} direction={index % 2 === 0 ? "left" : "right"}>
                <Card className="border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <Badge className="mb-2">{edu.period}</Badge>
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-xl font-bold mb-2"
                    >
                      {edu.title}
                    </motion.h3>
                    {edu.subtitle && (
                      <motion.p
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                        className="text-slate-600 dark:text-slate-400 mb-2"
                      >
                        {edu.subtitle}
                      </motion.p>
                    )}
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-slate-700 dark:text-slate-300"
                    >
                      {edu.institution}
                    </motion.p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Languages Section */}
      <section className="py-12 bg-slate-50 dark:bg-slate-800/50">
        <div className="container mx-auto px-4">
          <SectionHeading>Languages</SectionHeading>

          <div className="max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { language: "Portuguese", level: "Native" },
              { language: "English", level: "Advanced" },
              { language: "Spanish", level: "Basic" },
            ].map((lang, index) => (
              <AnimatedCard key={index} delay={0.1 * index}>
                <Card className="border border-slate-200 dark:border-slate-700 bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <motion.h3
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 + index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-xl font-bold mb-2"
                    >
                      {lang.language}
                    </motion.h3>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      whileInView={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                      className="text-slate-600 dark:text-slate-400"
                    >
                      {lang.level}
                    </motion.p>
                  </CardContent>
                </Card>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-800 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/images/circuit-pattern.svg')] opacity-10" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeading className="text-white">Get In Touch</SectionHeading>

          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  icon: <Phone className="h-6 w-6 text-white" />,
                  title: "Phone",
                  content: "+55 71 98155-7226",
                  isLink: false,
                },
                {
                  icon: <Mail className="h-6 w-6 text-white" />,
                  title: "Email",
                  content: "augustooperin@gmail.com",
                  isLink: false,
                },
                {
                  icon: <MapPin className="h-6 w-6 text-white" />,
                  title: "Location",
                  content: "Salvador, Bahia, Brazil",
                  isLink: false,
                },
                {
                  icon: <Linkedin className="h-6 w-6 text-white" />,
                  title: "LinkedIn",
                  content: "linkedin.com/in/augustoperin",
                  href: "https://linkedin.com/in/augustoperin",
                  isLink: true,
                },
                {
                  icon: <Github className="h-6 w-6 text-white" />,
                  title: "GitHub",
                  content: "github.com/AugustoPerin",
                  href: "https://github.com/AugustoPerin",
                  isLink: true,
                  colSpan: true,
                },
              ].map((item, index) => (
                <AnimatedCard key={index} delay={0.1 * index} className={item.colSpan ? "md:col-span-2" : ""}>
                  <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm border border-white/20 hover:bg-white/15 transition-all duration-300 h-full">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-blue-600 rounded-full">{item.icon}</div>
                      <div>
                        <h3 className="font-bold text-lg">{item.title}</h3>
                        {item.isLink ? (
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-200 hover:text-blue-100 transition-colors relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-blue-400 after:transition-all hover:after:w-full"
                          >
                            {item.content}
                          </a>
                        ) : (
                          <p className="text-blue-200">{item.content}</p>
                        )}
                      </div>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 text-center"
            >
              <p className="text-lg text-blue-200">
                I'm always open to discussing new projects, opportunities, or partnerships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="py-8 bg-slate-900 text-slate-400 text-center"
      >
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} Augusto de Oliveira Perin. All rights reserved.</p>
        </div>
      </motion.footer>
    </main>
  )
}
