type FieldType = "inputField" | "choices";

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
      question:
        "Do any of your dependents have health or other urgent concerns?",
      type: "choices" as FieldType,
      inputField: null,
      value: "",
      autoNext: true,
      choices: [
        {
          icon: "",
          label: "Yes",
          value: "stable_job",
        },
        {
          icon: "",
          label: "None",
          value: "okay_job",
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
  ],
};
