export type FieldType = "inputField" | "numberField" | "choices";

export const firstOnboardingStep = {
  question: "What’s your current employment status?",
  choices: [
    {
      icon: "💼",
      label: "Full time",
      value: "fullTime",
    },
    {
      icon: "💼",
      label: "Part time / Freelance",
      value: "partTime",
    },
    {
      icon: "💼",
      label: "Unemployed",
      value: "unemployed",
    },
  ],
};

export const nextOnboardingSteps = {
  fullTime: [
    {
      question: "What’s your job title?",
      description: "We will analyze your current job market",
      type: "inputField" as FieldType,
      value: "",
      inputField: {
        type: "text",
        required: true,
        label: "",
        placeholder: "e.g, Teacher",
      },
      autoNext: false,
      choices: [],
    },
    {
      question: "Pick your current job situation",
      show: "Software Engineer",
      type: "choices" as FieldType,
      inputField: null,
      value: "",
      autoNext: true,
      choices: [
        {
          icon: "💼",
          label: "Stable Job",
          value: "stable_job",
        },
        {
          icon: "👍",
          label: "Okay Job",
          value: "okay_job",
        },
        {
          icon: "🚩",
          label: "Risky Work",
          value: "risky_work",
        },
      ],
    },
    {
      question: "How much is your monthly expenses?",
      type: "monthlyExpensesForm" as FieldType,
      inputField: null,
      value: "",
      autoNext: false,
      choices: [
        {
          icon: "",
          label: "None",
          value: "stable_job",
        },
        {
          icon: "",
          label: "Minor concerns",
          value: "okay_job",
        },
        {
          icon: "",
          label: "Serious needs",
          value: "okay_job",
        },
      ],
    },
    {
      question: "Can your family help you financially?",
      type: "choices" as FieldType,
      inputField: null,
      withDependency: true,
      value: "",
      autoNext: true,
      choices: [
        {
          icon: "",
          label: "Yes, they can fully support me",
          value: "family_can_fully_support_me",
        },
        {
          icon: "",
          label: "They can help a little",
          value: "family_can_help_a_little",
        },
        {
          icon: "",
          label: "No, I have to manage on my own",
          value: "on_my_own_financially",
        },
      ],
    },
  ],
  partTime: [
    {
      question: "How consistent is your monthly income?",
      type: "choices" as FieldType,
      inputField: null,
      value: "",
      autoNext: true,
      choices: [
        {
          icon: "💼",
          label: "Very consistent",
          value: "stable_job",
        },
        {
          icon: "👍",
          label: "Somewhat consistent",
          value: "okay_job",
        },
        {
          icon: "🚩",
          label: "Moderately inconsistent",
          value: "risky_work",
        },
        {
          icon: "🚩",
          label: "Highly inconsistent",
          value: "risky_work",
        },
      ],
    },
    {
      question: "What's the longest you've gone without income?",
      type: "choices" as FieldType,
      inputField: null,
      value: "",
      autoNext: true,
      choices: [
        {
          icon: "",
          label: "Never had a gap",
          value: "stable_job",
        },
        {
          icon: "",
          label: "1-2 weeks",
          value: "okay_job",
        },
        {
          icon: "",
          label: "1 month",
          value: "risky_work",
        },
        {
          icon: "",
          label: "2-3 months",
          value: "risky_work",
        },
        {
          icon: "",
          label: "3+ months",
          value: "risky_work",
        },
      ],
    },
    {
      question: "Do you have safety nets?",
      type: "choices" as FieldType,
      inputField: null,
      value: "",
      autoNext: true,
      choices: [
        {
          icon: "",
          label: "Spouse/partner with steady income",
          value: "stable_job",
        },
        {
          icon: "",
          label: "Multiple income streams",
          value: "okay_job",
        },
        {
          icon: "",
          label: "Family financial support",
          value: "risky_work",
        },
        {
          icon: "",
          label: "Savings from good months",
          value: "risky_work",
        },
        {
          icon: "",
          label: "None of the above",
          value: "risky_work",
        },
      ],
    },
    {
      question: "How much is your monthly expenses?",
      type: "monthlyExpensesForm" as FieldType,
      inputField: null,
      value: "",
      autoNext: false,
      choices: [
        {
          icon: "",
          label: "None",
          value: "stable_job",
        },
        {
          icon: "",
          label: "Minor concerns",
          value: "okay_job",
        },
        {
          icon: "",
          label: "Serious needs",
          value: "okay_job",
        },
      ],
    },
    {
      question: "Any family members or dependents with health/urgent needs?",
      type: "choices" as FieldType,
      inputField: null,
      withDependency: true,
      value: "",
      autoNext: true,
      choices: [
        {
          icon: "",
          label: "None",
          value: "none",
        },
        {
          icon: "",
          label: "Yes, minor needs",
          value: "yes_minor_needs",
        },
        {
          icon: "",
          label: "Yes, serious needs",
          value: "yes_serious_needs",
        },
      ],
    },
  ],
  unemployed: [
    {
      question: "How long do you think you can get a new job in your field?",
      type: "choices" as FieldType,
      inputField: {},
      value: "",
      autoNext: true,
      choices: [
        {
          icon: "",
          label: "1-3 months",
          value: "1 to 3 months",
        },
        {
          icon: "",
          label: "3-6 months",
          value: "3 to 6 months",
        },
        {
          icon: "",
          label: "6-12 months",
          value: "6 to 12 months",
        },
      ],
    },
    {
      question: "What income/support do you currently have?",
      type: "choices" as FieldType,
      inputField: {},
      value: "",
      autoNext: true,
      choices: [
        {
          icon: "",
          label: "Unemployment benefits",
          value: "1 to 3 months",
        },
        {
          icon: "",
          label: "Investment income",
          value: "3 to 6 months",
        },
        {
          icon: "",
          label: "Spouse/partner income",
          value: "6 to 12 months",
        },
        {
          icon: "",
          label: "None",
          value: "6 to 12 months",
        },
      ],
    },
    {
      question: "How much is your monthly expenses?",
      type: "monthlyExpensesForm" as FieldType,
      inputField: null,
      value: "",
      autoNext: false,
      choices: [
        {
          icon: "",
          label: "None",
          value: "stable_job",
        },
        {
          icon: "",
          label: "Minor concerns",
          value: "okay_job",
        },
        {
          icon: "",
          label: "Serious needs",
          value: "okay_job",
        },
      ],
    },
    {
      question: "Any family members or dependents with health/urgent needs?",
      type: "choices" as FieldType,
      inputField: null,
      withDependency: true,
      value: "",
      autoNext: true,
      choices: [
        {
          icon: "",
          label: "None",
          value: "none",
        },
        {
          icon: "",
          label: "Yes, minor needs",
          value: "yes_minor_needs",
        },
        {
          icon: "",
          label: "Yes, serious needs",
          value: "yes_serious_needs",
        },
      ],
    },
  ],
};
