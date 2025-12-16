"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

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
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [errors, setErrors] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const updateField = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // Clear error when user starts typing
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: "" }));
        }
    };

    const validateStep = (currentStep: number): boolean => {
        const newErrors: Record<string, string> = {};

        if (currentStep === 1) {
            if (!formData.secteur) newErrors.secteur = "Veuillez sélectionner un secteur";
            if (!formData.fonction) newErrors.fonction = "Veuillez sélectionner une fonction";
            if (formData.fonction === "autres" && !formData.autrefonction.trim()) {
                newErrors.autrefonction = "Veuillez préciser la fonction";
            }
            if (!formData.description.trim()) newErrors.description = "Veuillez décrire le projet";
        }

        if (currentStep === 2) {
            if (!formData.estInscrit) newErrors.estInscrit = "Veuillez indiquer si vous êtes inscrit";
            if (formData.estInscrit === "non") {
                if (!formData.nom.trim()) newErrors.nom = "Le nom est requis";
                if (!formData.email.trim()) newErrors.email = "L'email est requis";
                if (formData.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
                    newErrors.email = "Email invalide";
                }
                if (!formData.telephone.trim()) newErrors.telephone = "Le téléphone est requis";
            } else if (formData.estInscrit === "oui") {
                if (!formData.nom.trim()) newErrors.nom = "Le nom est requis";
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

            if (!response.ok) throw new Error("Erreur lors de l'envoi");

            setIsSuccess(true);
            setStep(3); // Success step
        } catch (error) {
            console.error(error);
            alert("Une erreur est survenue. Veuillez réessayer.");
        } finally {
            setIsSubmitting(false);
        }
    };

    const fonctions = [
        "Finance",
        "Gestion",
        "IT",
        "Marketing",
        "RH",
        "Juridique",
        "Audit",
        "Autres"
    ];

    return (
        <div className="max-w-2xl mx-auto">
            {/* Progress Bar */}
            {step < 3 && (
                <div className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-foreground">
                            Étape {step + 1} sur 3
                        </span>
                        <span className="text-sm text-foreground-muted">
                            {step === 0 && "Introduction"}
                            {step === 1 && "Détails du projet"}
                            {step === 2 && "Vos informations"}
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
                        Rappel du programme d'apport d'affaires de Surly
                    </h2>

                    <div className="space-y-6 mb-8">
                        <div>
                            <h3 className="font-bold text-foreground mb-2">
                                Envoyez les détails du projet :
                            </h3>
                            <p className="text-foreground-muted leading-relaxed">
                                Vous êtes mis en contact avec un client ou un projet dans les secteurs banque/assurance que vous ne pouvez pas réaliser ?
                            </p>
                        </div>

                        <div>
                            <h3 className="font-bold text-foreground mb-2">
                                La mission est gagnée, vous êtes rémunéré :
                            </h3>
                            <p className="text-foreground-muted leading-relaxed">
                                Une fois la mission signée avec un expert de notre communauté, vous recevez 3% du montant à partir de l'encaissement de la première facture.
                            </p>
                        </div>

                        <div className="bg-accent/10 border-l-4 border-primary p-4 rounded">
                            <p className="font-semibold text-foreground mb-2">
                                Surly ne doit avoir aucune connaissance préalable de ce projet.
                            </p>
                            <p className="text-foreground-muted">
                                Pour nous partager une opportunité, vous ne pouvez pas être le client final ni le décideur du projet.
                            </p>
                        </div>
                    </div>

                    <div className="flex justify-end">
                        <Button onClick={handleNext} size="large">
                            Suivant
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
                        Détails du projet
                    </h2>

                    <div className="space-y-6">
                        {/* Secteur */}
                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">
                                Secteur <span className="text-red-500">*</span>
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
                                    <div className="font-semibold text-foreground">Banque</div>
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
                                    <div className="font-semibold text-foreground">Assurance</div>
                                </button>
                            </div>
                            {errors.secteur && <p className="text-sm text-red-500 mt-1">{errors.secteur}</p>}
                        </div>

                        {/* Fonction */}
                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-2">
                                Fonction concernée <span className="text-red-500">*</span>
                            </label>
                            <select
                                value={formData.fonction}
                                onChange={(e) => updateField("fonction", e.target.value)}
                                className={cn(
                                    "w-full p-3 rounded-xl border-2 transition-all bg-white",
                                    errors.fonction ? "border-red-500" : "border-gray-200 focus:border-primary"
                                )}
                            >
                                <option value="">Sélectionnez une fonction</option>
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
                                    Précisez la fonction <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.autrefonction}
                                    onChange={(e) => updateField("autrefonction", e.target.value)}
                                    placeholder="Ex: Data Science, DevOps..."
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
                                En dire plus sur le client / mission <span className="text-red-500">*</span>
                            </label>
                            <textarea
                                value={formData.description}
                                onChange={(e) => updateField("description", e.target.value)}
                                placeholder="Décrivez le contexte, les besoins, la durée estimée, le budget si connu..."
                                rows={6}
                                className={cn(
                                    "w-full p-3 rounded-xl border-2 transition-all resize-none",
                                    errors.description ? "border-red-500" : "border-gray-200 focus:border-primary"
                                )}
                            />
                            {errors.description && <p className="text-sm text-red-500 mt-1">{errors.description}</p>}
                        </div>
                    </div>

                    <div className="flex justify-between mt-8">
                        <Button onClick={handleBack} variant="ghost">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Retour
                        </Button>
                        <Button onClick={handleNext} size="large">
                            Suivant
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
                        Vos informations
                    </h2>

                    <div className="space-y-6">
                        {/* Déjà inscrit ? */}
                        <div>
                            <label className="block text-sm font-semibold text-foreground mb-3">
                                Êtes-vous déjà inscrit sur Surly ? <span className="text-red-500">*</span>
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
                                    <div className="font-semibold text-foreground">Oui</div>
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
                                    <div className="font-semibold text-foreground">Non</div>
                                </button>
                            </div>
                            {errors.estInscrit && <p className="text-sm text-red-500 mt-1">{errors.estInscrit}</p>}
                        </div>

                        {/* Nom (always shown) */}
                        {formData.estInscrit && (
                            <div>
                                <label className="block text-sm font-semibold text-foreground mb-2">
                                    Nom complet <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    value={formData.nom}
                                    onChange={(e) => updateField("nom", e.target.value)}
                                    placeholder="Jean Dupont"
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
                                        Email <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="email"
                                        value={formData.email}
                                        onChange={(e) => updateField("email", e.target.value)}
                                        placeholder="jean.dupont@exemple.fr"
                                        className={cn(
                                            "w-full p-3 rounded-xl border-2 transition-all",
                                            errors.email ? "border-red-500" : "border-gray-200 focus:border-primary"
                                        )}
                                    />
                                    {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-foreground mb-2">
                                        Téléphone <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        type="tel"
                                        value={formData.telephone}
                                        onChange={(e) => updateField("telephone", e.target.value)}
                                        placeholder="06 12 34 56 78"
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
                            Retour
                        </Button>
                        <Button
                            onClick={handleSubmit}
                            size="large"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? "Envoi en cours..." : "Envoyer"}
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
                        Merci pour votre recommandation !
                    </h2>

                    <p className="text-foreground-muted mb-6 leading-relaxed">
                        Votre opportunité a bien été transmise à notre équipe. Nous allons l'étudier et reviendrons vers vous rapidement.
                    </p>

                    <div className="bg-primary/5 border border-primary/10 rounded-xl p-6 mb-6">
                        <p className="text-sm text-foreground-muted mb-2">
                            💡 <strong className="text-foreground">Rappel :</strong>
                        </p>
                        <p className="text-sm text-foreground-muted">
                            Si la mission est conclue avec un de nos experts, vous recevrez <strong className="text-primary">3%</strong> du montant facturé dès l'encaissement de la première facture.
                        </p>
                    </div>

                    <Button
                        as="a"
                        href="/apport-affaires"
                        size="large"
                    >
                        Retour au programme
                    </Button>
                </div>
            )}
        </div>
    );
};
