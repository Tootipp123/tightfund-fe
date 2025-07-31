export type FieldType = "inputField" | "number" | "choices";

export const questionsWithDependencies = {
  familySupport: "Can your family help you financially?",
  expenses: "How much is your monthly expenses?",
  dependentsNeeds: "Any family members or dependents with health/urgent needs?",
  dependentsAllocation: "How much are you willing to allocate for their needs?",
};

export const dependencyKeys = {
  anyDependentsWithUrgentNeeds: "any_dependents_with_urgent_needs",
};

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
          value: "very_consistent",
        },
        {
          icon: "👍",
          label: "Somewhat consistent",
          value: "somewhat_consistent",
        },
        {
          icon: "👎",
          label: "Moderately inconsistent",
          value: "moderately_inconsistent",
        },
        {
          icon: "🚩",
          label: "Highly inconsistent",
          value: "highly_inconsistent",
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
          value: "never_had_a_gap",
        },
        {
          icon: "",
          label: "1-2 weeks",
          value: "1-2_weeks",
        },
        {
          icon: "",
          label: "1 month",
          value: "1_month",
        },
        {
          icon: "",
          label: "2-3 months",
          value: "2-3_months",
        },
        {
          icon: "",
          label: "3+ months",
          value: "3plus_months",
        },
      ],
    },
    {
      question: "Do you have safety nets?",
      type: "multipleSelect" as FieldType,
      description: "Select all that apply. Skip if none.",
      inputField: null,
      value: "",
      autoNext: false,
      choices: [
        {
          icon: "",
          label: "Spouse/partner with steady income",
          value: "spouse_or_partner_with_steady_income",
        },
        {
          icon: "",
          label: "Some income streams",
          value: "some_income_streams",
        },
        {
          icon: "",
          label: "Family financial support",
          value: "family_financial_support",
        },
        {
          icon: "",
          label: "Savings from good months",
          value: "savings_from_good_months",
        },
      ],
    },
    {
      question: "How much is your monthly expenses?",
      type: "monthlyExpensesForm" as FieldType,
      inputField: null,
      value: "",
      autoNext: false,
    },
    {
      question: "Any family members or dependents with health/urgent needs?",
      key: "any_dependents_with_urgent_needs",
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
      type: "multipleSelect" as FieldType,
      inputField: {},
      description: "Select all that apply. Skip if none.",
      value: "",
      autoNext: false,
      choices: [
        {
          icon: "",
          label: "Unemployment benefits",
          value: "unemployment_benefits",
        },
        {
          icon: "",
          label: "Investment income",
          value: "investment_income",
        },
        {
          icon: "",
          label: "Spouse/partner income",
          value: "spouse_or_partner_income",
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
      key: "any_dependents_with_urgent_needs",
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
