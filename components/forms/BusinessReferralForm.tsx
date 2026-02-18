"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { MAX_MESSAGE_LENGTH } from "@/lib/input-validator";
import { useTranslations } from 'next-intl';

interface FormData {
    secteur: "banque" | "assurance" | "";
    fonction: string;
    autrefonction: string;
    description: string;
    estInscrit: "oui" | "non" | "";
    nom: string;
    email: string;
    telephone: string;
}

const initialFormData: FormData = {
    secteur: "",
    fonction: "",
    autrefonction: "",
    description: "",
    estInscrit: "",
    nom: "",
    email: "",
    telephone: "",
};

export const BusinessReferralForm = () => {
    const t = useTranslations('businessReferralForm');
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const updateField = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: "" }));
        }
    };

    const validateStep = (currentStep: number): boolean => {
        const newErrors: Record<string, string> = {};

        if (currentStep === 1) {
            if (!formData.secteur) newErrors.secteur = t('validation.sectorRequired');
            if (!formData.fonction) newErrors.fonction = t('validation.functionRequired');
            if (formData.fonction === "autres" && !formData.autrefonction.trim()) {
                newErrors.autrefonction = t('validation.otherFunctionRequired');
            }
            if (!formData.description.trim()) {
                newErrors.description = t('validation.descriptionRequired');
            } else if (formData.description.length > MAX_MESSAGE_LENGTH) {
                newErrors.description = t('validation.descriptionMaxLength', { max: MAX_MESSAGE_LENGTH.toString() });
            }
        }

        if (currentStep === 2) {
            if (!formData.estInscrit) newErrors.estInscrit = t('validation.registeredRequired');
            if (formData.estInscrit === "non") {
                if (!formData.nom.trim()) newErrors.nom = t('validation.nameRequired');
                if (!formData.email.trim()) newErrors.email = t('validation.emailRequired');
                if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                    newErrors.email = t('validation.emailInvalid');
                }
                if (!formData.telephone.trim()) newErrors.telephone = t('validation.phoneRequired');
            } else if (formData.estInscrit === "oui") {
                if (!formData.nom.trim()) newErrors.nom = t('validation.nameRequired');
            }
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleNext = () => {
        if (validateStep(step)) {
            setStep(prev => prev + 1);
        }
    };

    const handleBack = () => {
        setStep(prev => prev - 1);
    };

    const handleSubmit = async () => {
        if (!validateStep(step)) return;

        setIsSubmitting(true);
        try {
            const response = await fetch("/api/business-referral", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            if (!response.ok) throw new Error("Submit error");

            setIsSuccess(true);
            setStep(3);
        } catch (error) {
            console.error(error);
            alert(t('validation.submitError'));
        } finally {
            setIsSubmitting(false);
        }
    };

    const fonctions = t.raw('step1.functions') as string[];

    return (
        <div className="max-w-2xl mx-auto">
            {/* Progress Bar */}
            {step < 3 && (
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">
                            {t('progress.stepOf', { current: (step + 1).toString(), total: '3' })}
                        </span>
                        <span className="text-sm text-foreground-muted">
                            {step === 0 && t('progress.step0')}
                            {step === 1 && t('progress.step1')}
                            {step === 2 && t('progress.step2')}
                        </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                            className="h-full bg-primary transition-all duration-300"
                            style={{ width: `${((step + 1) / 3) * 100}%` }}
                        />
                    </div>
                </div>
            )}

            {/* Step 0: Program Reminder */}
            {step === 0 && (
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-primary/10">
                    <h2 className="text-2xl font-bold text-primary mb-6">
                        {t('step0.title')}
                    </h2>

                    <div className="space-y-6 mb-8">
                        <div>
                            <h3 className="font-bold text-foreground mb-2">
                                {t('step0.sendTitle')}
                            </h3>
                            <p className="text-foreground-muted leading-relaxed">
                                {t('step0.sendDesc')}
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-foreground mb-2">
                                {t('step0.wonTitle')}
                            </h3>
                            <p className="text-foreground-muted leading-relaxed">
                                {t('step0.wonDesc')}
                            </p>
                        </div>

                        <div className="bg-accent/10 border-l-4 border-primary p-4 rounded">
                            <p className="font-semibold text-foreground mb-2">
                                {t('step0.warningTitle')}
                            </p>
                            <p className="text-foreground-muted">
                                {t('step0.warningDesc')}
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <Button onClick={handleNext} size="large">
                            {t('buttons.next')}
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Button>
                    </div>
                </div>
            )}

            {/* Step 1: Project Details */}
            {step === 1 && (
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-primary/10">
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                        {t('step1.title')}
                    </h2>

                    <div className="space-y-6">
                        {/* Secteur */}
                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">
                                {t('step1.sectorLabel')} <span className="text-red-500">*</span>
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={() => updateField("secteur", "banque")}
                                    className={cn(
                                        "p-4 rounded-xl border-2 transition-all text-left",
                                        formData.secteur === "banque"
                                            ? "border-primary bg-primary/5"
                                            : "border-gray-200 hover:border-primary/30"
                                    )}
                                >
                                    <div className="font-semibold text-foreground">{t('step1.sectorBanque')}</div>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => updateField("secteur", "assurance")}
                                    className={cn(
                                        "p-4 rounded-xl border-2 transition-all text-left",
                                        formData.secteur === "assurance"
                                            ? "border-primary bg-primary/5"
                                            : "border-gray-200 hover:border-primary/30"
                                    )}
                                >
                                    <div className="font-semibold text-foreground">{t('step1.sectorAssurance')}</div>
                                </button>
                            </div>
                            {errors.secteur && <p className="text-sm text-red-500 mt-1">{errors.secteur}</p>}
                        </div>

                        {/* Fonction */}
                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">
                                {t('step1.functionLabel')} <span className="text-red-500">*</span>
                            </label>
                            <select
                                value={formData.fonction}
                                onChange={(e) => updateField("fonction", e.target.value)}
                                className={cn(
                                    "w-full p-3 rounded-xl border-2 transition-all bg-white",
                                    errors.fonction ? "border-red-500" : "border-gray-200 focus:border-primary"
                                )}
                            >
                                <option value="">{t('step1.functionPlaceholder')}</option>
                                {fonctions.map(f => (
                                    <option key={f} value={f.toLowerCase()}>{f}</option>
                                ))}
                            </select>
                            {errors.fonction && <p className="text-sm text-red-500 mt-1">{errors.fonction}</p>}
                        </div>

                        {/* Autres - Précisez */}
                        {formData.fonction === "autres" && (
                            <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">
                                    {t('step1.otherLabel')} <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.autrefonction}
                                    onChange={(e) => updateField("autrefonction", e.target.value)}
                                    placeholder={t('step1.otherPlaceholder')}
                                    className={cn(
                                        "w-full p-3 rounded-xl border-2 transition-all",
                                        errors.autrefonction ? "border-red-500" : "border-gray-200 focus:border-primary"
                                    )}
                                />
                                {errors.autrefonction && <p className="text-sm text-red-500 mt-1">{errors.autrefonction}</p>}
                            </div>
                        )}

                        {/* Description */}
                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">
                                {t('step1.descriptionLabel')} <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                value={formData.description}
                                onChange={(e) => updateField("description", e.target.value)}
                                placeholder={t('step1.descriptionPlaceholder')}
                                rows={6}
                                maxLength={MAX_MESSAGE_LENGTH}
                                className={cn(
                                    "w-full p-3 rounded-xl border-2 transition-all resize-none",
                                    errors.description ? "border-red-500" : "border-gray-200 focus:border-primary"
                                )}
                            />
                            <div className="flex items-center justify-between mt-1">
                                {errors.description && <p className="text-sm text-red-500">{errors.description}</p>}
                                <p className={cn(
                                    "text-sm ml-auto",
                                    formData.description.length > MAX_MESSAGE_LENGTH * 0.9
                                        ? "text-red-500 font-semibold"
                                        : formData.description.length > MAX_MESSAGE_LENGTH * 0.75
                                            ? "text-orange-500"
                                            : "text-gray-500"
                                )}>
                                    {formData.description.length} / {MAX_MESSAGE_LENGTH}
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-between mt-8">
                        <Button onClick={handleBack} variant="ghost">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            {t('buttons.back')}
                        </Button>
                        <Button onClick={handleNext} size="large">
                            {t('buttons.next')}
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </Button>
                    </div>
                </div>
            )}

            {/* Step 2: Contact Information */}
            {step === 2 && (
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-primary/10">
                    <h2 className="text-2xl font-bold text-foreground mb-6">
                        {t('step2.title')}
                    </h2>

                    <div className="space-y-6">
                        {/* Déjà inscrit ? */}
                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-3">
                                {t('step2.registeredLabel')} <span className="text-red-500">*</span>
                            </label>
                            <div className="grid grid-cols-2 gap-4">
                                <button
                                    type="button"
                                    onClick={() => updateField("estInscrit", "oui")}
                                    className={cn(
                                        "p-4 rounded-xl border-2 transition-all",
                                        formData.estInscrit === "oui"
                                            ? "border-primary bg-primary/5"
                                            : "border-gray-200 hover:border-primary/30"
                                    )}
                                >
                                    <div className="font-semibold text-foreground">{t('step2.yes')}</div>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => updateField("estInscrit", "non")}
                                    className={cn(
                                        "p-4 rounded-xl border-2 transition-all",
                                        formData.estInscrit === "non"
                                            ? "border-primary bg-primary/5"
                                            : "border-gray-200 hover:border-primary/30"
                                    )}
                                >
                                    <div className="font-semibold text-foreground">{t('step2.no')}</div>
                                </button>
                            </div>
                            {errors.estInscrit && <p className="text-sm text-red-500 mt-1">{errors.estInscrit}</p>}
                        </div>

                        {/* Nom (always shown) */}
                        {formData.estInscrit && (
                            <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">
                                    {t('step2.nameLabel')} <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.nom}
                                    onChange={(e) => updateField("nom", e.target.value)}
                                    placeholder={t('step2.namePlaceholder')}
                                    className={cn(
                                        "w-full p-3 rounded-xl border-2 transition-all",
                                        errors.nom ? "border-red-500" : "border-gray-200 focus:border-primary"
                                    )}
                                />
                                {errors.nom && <p className="text-sm text-red-500 mt-1">{errors.nom}</p>}
                            </div>
                        )}

                        {/* Email & Phone (only if not inscrit) */}
                        {formData.estInscrit === "non" && (
                            <>
                                <div>
                                    <label className="block text-sm font-semibold text-foreground mb-2">
                                        {t('step2.emailLabel')} <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => updateField("email", e.target.value)}
                                        placeholder={t('step2.emailPlaceholder')}
                                        className={cn(
                                            "w-full p-3 rounded-xl border-2 transition-all",
                                            errors.email ? "border-red-500" : "border-gray-200 focus:border-primary"
                                        )}
                                    />
                                    {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-foreground mb-2">
                                        {t('step2.phoneLabel')} <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        value={formData.telephone}
                                        onChange={(e) => updateField("telephone", e.target.value)}
                                        placeholder={t('step2.phonePlaceholder')}
                                        className={cn(
                                            "w-full p-3 rounded-xl border-2 transition-all",
                                            errors.telephone ? "border-red-500" : "border-gray-200 focus:border-primary"
                                        )}
                                    />
                                    {errors.telephone && <p className="text-sm text-red-500 mt-1">{errors.telephone}</p>}
                                </div>
                            </>
                        )}
                    </div>

                    <div className="flex justify-between mt-8">
                        <Button onClick={handleBack} variant="ghost">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            {t('buttons.back')}
                        </Button>
                        <Button
                            onClick={handleSubmit}
                            size="large"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? t('buttons.sending') : t('buttons.send')}
                        </Button>
                    </div>
                </div>
            )}

            {/* Step 3: Success */}
            {step === 3 && isSuccess && (
                <div className="bg-white rounded-2xl shadow-lg p-8 border border-primary/10 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                        <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>

                    <h2 className="text-2xl font-bold text-foreground mb-4">
                        {t('success.title')}
                    </h2>

                    <p className="text-foreground-muted mb-6 leading-relaxed">
                        {t('success.message')}
                    </p>

                    <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 mb-6">
                        <p className="text-sm text-foreground-muted mb-2">
                            💡 <strong className="text-foreground">{t('success.reminderLabel')}</strong>
                        </p>
                        <p className="text-sm text-foreground-muted"
                            dangerouslySetInnerHTML={{ __html: t.raw('success.reminderText') }}
                        />
                    </div>

                    <Button
                        as="a"
                        href="/apport-affaires"
                        size="large"
                    >
                        {t('success.backToProgram')}
                    </Button>
                </div>
            )}
        </div>
    );
};
