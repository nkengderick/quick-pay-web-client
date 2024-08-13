import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import React, { ReactNode } from "react";
import { IconBaseProps, IconType } from "react-icons";

export interface IntegrationData {
  outerImageUrl: string;
  innerImageUrl: string;
  header: string;
  description: string;
  heroContent: string;
  headerCard: {
    title: string;
    subtitle: string;
  };
  primaryButtonLink: string;
  primaryButtonText: string;
  secondaryButtonLink: string;
  secondaryButtonText: string;
}

export interface SocialMedia {
  platform: string;
  url: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  email: string;
  workingHours: string;
  helpText: string;
  socialMedia: SocialMedia[];
}

export interface ContactUsField {
  label: string;
  name: string;
  type: 'text' | 'email' | 'textarea';
  required?: boolean;
}

export interface ContactUsData {
  title: string;
  description: string;
  fields: ContactUsField[];
  submitButtonText: string;
}

export interface Step {
  icon: any;
  step: string;
  procedure: string;
}

export interface HowItWorksData {
  header: string;
  description: string;
  primaryButtonText: string;
  secondaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonLink: string;
  imageUrl: string;
  steps: Step[];
}

export interface Catch {
  title: string;
  description: string;
  icon: IconDefinition;
}

export interface MainCatchCardData {
  header: string;
  description: string;
  catches: Catch[];
}