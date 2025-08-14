---
layout: page
title: Accessibility Conformance Report
permalink: /acr/
topLevel: false
pageClass: acr
---

## Ilios Accessibility Conformance Report

(Based on VPAT® Version 2.5)

- **Name of Product/Version:** Ilios v3.x
- **Report Date:** August 2025
- **Product Description:** The premier open source curriculum management platform for schools around the globe
- **Contact Information:** support@iliosproject.org
- **Notes:**
- **Evaluation Methods Used:** Automated tests in CI pipeline; site scanning with Siteimprove; manual testing by developers and users familiar with functionality; testing with assistive technologies by experts in those technologies, but not in the product.

---

### Applicable Standards/Guidelines

| Standard/Guideline                              | Level A | Level AA | Level AAA |
| ----------------------------------------------- | ------- | -------- | --------- |
| Web Content Accessibility Guidelines (WCAG) 2.0 | Yes     | Yes      | Yes       |
| Web Content Accessibility Guidelines (WCAG) 2.1 | Yes     | Yes      | Yes       |
| Web Content Accessibility Guidelines (WCAG) 2.2 | Yes     | Yes      | Yes       |

---

### Terms Used in Conformance Level

- **Supports:** The functionality of the product has at least one method that meets the criterion without known defects or meets with equivalent facilitation.
- **Partially Supports:** Some functionality of the product does not meet the criterion.
- **Does Not Support:** The majority of product functionality does not meet the criterion.
- **Not Applicable:** The criterion is not relevant to the product.
- **Not Evaluated:** The product has not been evaluated against the criterion. This can only be used in WCAG Level AAA criteria.

---

### WCAG 2.x Accessibility Conformance Report

**Note:** When reporting on conformance, success criteria apply to full pages, complete processes, and accessibility-supported ways of using technology per WCAG 2.x Conformance Requirements.

---

## Table 1: Success Criteria, Level A

**Notes:**

| Criteria                                                                                                                        | Conformance Level | Remarks and Explanations |
| ------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ------------------------ |
| [**1.1.1 Non-text Content**](http://www.w3.org/TR/WCAG20/#text-equiv-all) (Level A)                                             | Supports          |                          |
| [**1.2.1 Audio-only and Video-only (Prerecorded)**](http://www.w3.org/TR/WCAG20/#media-equiv-av-only-alt) (Level A)             | Supports          |                          |
| [**1.2.2 Captions (Prerecorded)**](http://www.w3.org/TR/WCAG20/#media-equiv-captions) (Level A)                                 | Supports          |                          |
| [**1.2.3 Audio Description or Media Alternative (Prerecorded)**](http://www.w3.org/TR/WCAG20/#media-equiv-audio-desc) (Level A) | Supports          |                          |
| [**1.3.1 Info and Relationships**](http://www.w3.org/TR/WCAG20/#content-structure-separation-programmatic) (Level A)            | Supports          |                          |
| [**1.3.2 Meaningful Sequence**](http://www.w3.org/TR/WCAG20/#content-structure-separation-sequence) (Level A)                   | Supports          |                          |
| [**1.3.3 Sensory Characteristics**](http://www.w3.org/TR/WCAG20/#content-structure-separation-understanding) (Level A)          | Supports          |                          |
| [**1.4.1 Use of Color**](http://www.w3.org/TR/WCAG20/#visual-audio-contrast-without-color) (Level A)                            | Supports          |                          |
| [**1.4.2 Audio Control**](http://www.w3.org/TR/WCAG20/#visual-audio-contrast-dis-audio) (Level A)                               | Supports          |                          |
| [**2.1.1 Keyboard**](http://www.w3.org/TR/WCAG20/#keyboard-operation-keyboard-operable) (Level A)                               | Supports          |                          |
| [**2.1.2 No Keyboard Trap**](http://www.w3.org/TR/WCAG20/#keyboard-operation-trapping) (Level A)                                | Supports          |                          |
| [**2.1.4 Character Key Shortcuts**](https://www.w3.org/TR/WCAG21/#character-key-shortcuts) (Level A 2.1 and 2.2)                | Supports          |                          |
| [**2.2.1 Timing Adjustable**](http://www.w3.org/TR/WCAG20/#time-limits-required-behaviors) (Level A)                            | Supports          |                          |
| [**2.2.2 Pause, Stop, Hide**](http://www.w3.org/TR/WCAG20/#time-limits-pause) (Level A)                                         | Supports          |                          |
| [**2.3.1 Three Flashes or Below Threshold**](http://www.w3.org/TR/WCAG20/#seizure-does-not-violate) (Level A)                   | Supports          |                          |
| [**2.4.1 Bypass Blocks**](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-skip) (Level A)                                    | Supports          |                          |
| [**2.4.2 Page Titled**](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-title) (Level A)                                     | Supports          |                          |
| [**2.4.3 Focus Order**](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-focus-order) (Level A)                               | Supports          |                          |
| [**2.4.4 Link Purpose (In Context)**](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-refs) (Level A)                        | Supports          |                          |
| [**2.5.1 Pointer Gestures**](https://www.w3.org/TR/WCAG21/#pointer-gestures) (Level A 2.1 and 2.2)                              | Supports          |                          |
| [**2.5.2 Pointer Cancellation**](https://www.w3.org/TR/WCAG21/#pointer-cancellation) (Level A 2.1 and 2.2)                      | Supports          |                          |
| [**2.5.3 Label in Name**](https://www.w3.org/TR/WCAG21/#label-in-name) (Level A 2.1 and 2.2)                                    | Supports          |                          |
| [**2.5.4 Motion Actuation**](https://www.w3.org/TR/WCAG21/#motion-actuation) (Level A 2.1 and 2.2)                              | Supports          |                          |
| [**3.1.1 Language of Page**](http://www.w3.org/TR/WCAG20/#meaning-doc-lang-id) (Level A)                                        | Supports          |                          |
| [**3.2.1 On Focus**](http://www.w3.org/TR/WCAG20/#consistent-behavior-receive-focus) (Level A)                                  | Supports          |                          |
| [**3.2.2 On Input**](http://www.w3.org/TR/WCAG20/#consistent-behavior-unpredictable-change) (Level A)                           | Supports          |                          |
| [**3.2.6 Consistent Help**](https://www.w3.org/TR/WCAG22/#consistent-help) (Level A 2.2 only)                                   | Supports          |                          |
| [**3.3.1 Error Identification**](http://www.w3.org/TR/WCAG20/#minimize-error-identified) (Level A)                              | Supports          |                          |
| [**3.3.2 Labels or Instructions**](http://www.w3.org/TR/WCAG20/#minimize-error-cues) (Level A)                                  | Supports          |                          |
| [**3.3.7 Redundant Entry**](https://www.w3.org/TR/WCAG22/#redundant-entry) (Level A 2.2 only)                                   | Supports          |                          |
| [**4.1.2 Name, Role, Value**](http://www.w3.org/TR/WCAG20/#ensure-compat-rsv) (Level A)                                         | Supports          |                          |

## Table 2: Success Criteria, Level AA

**Notes:**
Ilios is designed and tested against the WCAG 2.1 AA standard, this table includes criteria from the 2.2 version of this standard. Progress is ongoing to align with these new benchmarks, but not currently supported.

| Criteria                                                                                                                             | Conformance Level  | Remarks and Explanations |
| ------------------------------------------------------------------------------------------------------------------------------------ | ------------------ | ------------------------ |
| [**1.2.4 Captions (Live)**](http://www.w3.org/TR/WCAG20/#media-equiv-real-time-captions) (Level AA)                                  | Supports           |                          |
| [**1.2.5 Audio Description (Prerecorded)**](http://www.w3.org/TR/WCAG20/#media-equiv-audio-desc-only) (Level AA)                     | Supports           |                          |
| [**1.3.4 Orientation**](https://www.w3.org/TR/WCAG21/#orientation) (Level AA 2.1 and 2.2)                                            | Supports           |                          |
| [**1.3.5 Identify Input Purpose**](https://www.w3.org/TR/WCAG21/#identify-input-purpose) (Level AA 2.1 and 2.2)                      | Supports           |                          |
| [**1.4.3 Contrast (Minimum)**](http://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast) (Level AA)                               | Supports           |                          |
| [**1.4.4 Resize text**](http://www.w3.org/TR/WCAG20/#visual-audio-contrast-scale) (Level AA)                                         | Supports           |                          |
| [**1.4.5 Images of Text**](http://www.w3.org/TR/WCAG20/#visual-audio-contrast-text-presentation) (Level AA)                          | Supports           |                          |
| [**1.4.10 Reflow**](https://www.w3.org/TR/WCAG21/#reflow) (Level AA 2.1 and 2.2)                                                     | Supports           |                          |
| [**1.4.11 Non-text Contrast**](https://www.w3.org/TR/WCAG21/#non-text-contrast) (Level AA 2.1 and 2.2)                               | Supports           |                          |
| [**1.4.12 Text Spacing**](https://www.w3.org/TR/WCAG21/#text-spacing) (Level AA 2.1 and 2.2)                                         | Supports           |                          |
| [**1.4.13 Content on Hover or Focus**](https://www.w3.org/TR/WCAG21/#content-on-hover-or-focus) (Level AA 2.1 and 2.2)               | Supports           |                          |
| [**2.4.5 Multiple Ways**](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-mult-loc) (Level AA)                                    | Supports           |                          |
| [**2.4.6 Headings and Labels**](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-descriptive) (Level AA)                           | Supports           |                          |
| [**2.4.7 Focus Visible**](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-focus-visible) (Level AA)                               | Supports           |                          |
| [**2.4.11 Focus Not Obscured (Minimum)**](https://www.w3.org/TR/WCAG22/#focus-not-obscured-minimum) (Level AA 2.2 only)              | Supports           |                          |
| [**2.5.7 Dragging Movements**](https://www.w3.org/TR/WCAG22/#dragging-movements) (Level AA 2.2 only)                                 | Does Not Support   | See Note                 |
| [**2.5.8 Target Size (Minimum)**](https://www.w3.org/TR/WCAG22/#target-size-minimum) (Level AA 2.2 only)                             | Partially Supports | See Note                 |
| [**3.1.2 Language of Parts**](http://www.w3.org/TR/WCAG20/#meaning-other-lang-id) (Level AA)                                         | Supports           |                          |
| [**3.2.3 Consistent Navigation**](http://www.w3.org/TR/WCAG20/#consistent-behavior-consistent-locations) (Level AA)                  | Supports           |                          |
| [**3.2.4 Consistent Identification**](http://www.w3.org/TR/WCAG20/#consistent-behavior-consistent-functionality) (Level AA)          | Supports           |                          |
| [**3.3.3 Error Suggestion**](http://www.w3.org/TR/WCAG20/#minimize-error-suggestions) (Level AA)                                     | Supports           |                          |
| [**3.3.4 Error Prevention (Legal, Financial, Data)**](http://www.w3.org/TR/WCAG20/#minimize-error-reversible) (Level AA)             | Supports           |                          |
| [**3.3.8 Accessible Authentication (Minimum)**](https://www.w3.org/TR/WCAG22/#accessible-authentication-minimum) (Level AA 2.2 only) | Supports           |                          |
| [**4.1.3 Status Messages**](https://www.w3.org/TR/WCAG21/#status-messages) (Level AA 2.1 and 2.2)                                    | Supports           |                          |

## Table 3: Success Criteria, Level AAA

**Notes:**
Ilios is designed and tested against the WCAG 2.1 AA standard, this table includes many criteria from the AAA version of this standard which we do not target in our tests or development. However, if you have any issues accessing the content or features of Ilios please let us know.

| Criteria                                                                                                                                | Conformance Level | Remarks and Explanations |
| --------------------------------------------------------------------------------------------------------------------------------------- | ----------------- | ------------------------ |
| [**1.2.6 Sign Language (Prerecorded)**](http://www.w3.org/TR/WCAG20/#media-equiv-sign) (Level AAA)                                      | Supports          |                          |
| [**1.2.7 Extended Audio Description (Prerecorded)**](http://www.w3.org/TR/WCAG20/#media-equiv-extended-ad) (Level AAA)                  | Supports          |                          |
| [**1.2.8 Media Alternative (Prerecorded)**](http://www.w3.org/TR/WCAG20/#media-equiv-text-doc) (Level AAA)                              | Supports          |                          |
| [**1.2.9 Audio-only (Live)**](http://www.w3.org/TR/WCAG20/#media-equiv-live-audio-only) (Level AAA)                                     | Supports          |                          |
| [**1.3.6 Identify Purpose**](https://www.w3.org/TR/WCAG21/#identify-purpose) (Level AAA 2.1 and 2.2)                                    | Not Evaluated     | See Note                 |
| [**1.4.6 Contrast (Enhanced)**](http://www.w3.org/TR/WCAG20/#visual-audio-contrast7) (Level AAA)                                        | Does Not Support  | See Note                 |
| [**1.4.7 Low or No Background Audio**](http://www.w3.org/TR/WCAG20/#visual-audio-contrast-noaudio) (Level AAA)                          | Supports          | See Note                 |
| [**1.4.8 Visual Presentation**](http://www.w3.org/TR/WCAG20/#visual-audio-contrast-visual-presentation) (Level AAA)                     | Does Not Support  | See Note                 |
| [**1.4.9 Images of Text (No Exception)**](http://www.w3.org/TR/WCAG20/#visual-audio-contrast-text-images) (Level AAA)                   | Supports          |                          |
| [**2.1.3 Keyboard (No Exception)**](http://www.w3.org/TR/WCAG20/#keyboard-operation-all-funcs) (Level AAA)                              | Supports          |                          |
| [**2.2.3 No Timing**](http://www.w3.org/TR/WCAG20/#time-limits-no-exceptions) (Level AAA)                                               | Supports          |                          |
| [**2.2.4 Interruptions**](http://www.w3.org/TR/WCAG20/#time-limits-postponed) (Level AAA)                                               | Supports          |                          |
| [**2.2.5 Re-authenticating**](http://www.w3.org/TR/WCAG20/#time-limits-server-timeout) (Level AAA)                                      | Does Not Support  | See Note                 |
| [**2.2.6 Timeouts**](https://www.w3.org/TR/WCAG21/#timeouts) (Level AAA 2.1 and 2.2)                                                    | Does Not Support  | See Note                 |
| [**2.3.2 Three Flashes**](http://www.w3.org/TR/WCAG20/#seizure-three-times) (Level AAA)                                                 | Does Not Support  | See Note                 |
| [**2.3.3 Animation from Interactions**](https://www.w3.org/TR/WCAG21/#animation-from-interactions) (Level AAA 2.1 and 2.2)              | Does Not Support  | See Note                 |
| [**2.4.8 Location**](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-location) (Level AAA)                                           | Supports          |                          |
| [**2.4.9 Link Purpose (Link Only)**](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-link) (Level AAA)                               | Supports          |                          |
| [**2.4.10 Section Headings**](http://www.w3.org/TR/WCAG20/#navigation-mechanisms-headings) (Level AAA)                                  | Supports          |                          |
| [**2.4.12 Focus Not Obscured (Enhanced)**](https://www.w3.org/TR/WCAG22/#focus-not-obscured-enhanced) (Level AAA 2.2 only)              | Supports          |                          |
| [**2.4.13 Focus Appearance**](https://www.w3.org/TR/WCAG22/#focus-appearance) (Level AAA 2.2 only)                                      | Supports          |                          |
| [**2.5.5 Target Size**](https://www.w3.org/TR/WCAG21/#target-size) (Level AAA 2.1 and 2.2)                                              | Limited Support   | See Note                 |
| [**2.5.6 Concurrent Input Mechanisms**](https://www.w3.org/TR/WCAG21/#concurrent-input-mechanisms) (Level AAA 2.1 and 2.2)              | Supports          |                          |
| [**3.1.3 Unusual Words**](http://www.w3.org/TR/WCAG20/#meaning-idioms) (Level AAA)                                                      | Supports          |                          |
| [**3.1.4 Abbreviations**](http://www.w3.org/TR/WCAG20/#meaning-located) (Level AAA)                                                     | Supports          |                          |
| [**3.1.5 Reading Level**](http://www.w3.org/TR/WCAG20/#meaning-supplements) (Level AAA)                                                 | Supports          |                          |
| [**3.1.6 Pronunciation**](http://www.w3.org/TR/WCAG20/#meaning-pronunciation) (Level AAA)                                               | Does Not Support  | See Note                 |
| [**3.2.5 Change on Request**](http://www.w3.org/TR/WCAG20/#consistent-behavior-no-extreme-changes-context) (Level AAA)                  | Supports          |                          |
| [**3.3.5 Help**](http://www.w3.org/TR/WCAG20/#minimize-error-context-help) (Level AAA)                                                  | Supports          |                          |
| [**3.3.6 Error Prevention (All)**](http://www.w3.org/TR/WCAG20/#minimize-error-reversible-all) (Level AAA)                              | Supports          |                          |
| [**3.3.9 Accessible Authentication (Enhanced)**](https://www.w3.org/TR/WCAG22/#accessible-authentication-enhanced) (Level AAA 2.2 only) | Supports          |                          |
