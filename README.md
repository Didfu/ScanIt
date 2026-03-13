
# ScanIt: Content Authenticity Framework

![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)
![Python 3.12+](https://img.shields.io/badge/python-3.12+-blue.svg)
![Blockchain](https://img.shields.io/)
![Status](https://img.shields.io/badge/Status-Research_Prototype-orange)

**ScanIt** is an open-source framework designed to solve the liability crisis in the age of Generative AI. It merges multi-model AI detection with immutable blockchain ledgers to provide a transparent, mathematically verifiable chain of custody for digital documents.

---

## 📜 About This Repository

**Note on Commit History:**
This repository contains the source code for the *ScanIt* framework as presented at the **2026 3rd International Conference on Integrated Intelligence and Communication Systems (ICIICS)**. The codebase was migrated from a restricted **NVIDIA DGX Station A100** development environment; consequently, the granular development history is not preserved in this public release. This repository represents the "Camera-Ready" state of the system.

---

## 🚀 Key Features

### 1. Multi-Model Consensus Engine
Unlike "Black Box" detectors, ScanIt uses a transparent voting ensemble to reduce false positives:
* **Fast-DetectGPT:** Provides rapid (<1.5s) initial filtering.
* **DetectGPT:** Performs deep curvature analysis (Zero-Shot) for high-stakes verification.
* **GLTR:** Analyzes token rankings to provide visual explainability.

### 2. Automated Source Tracer (Fact-Checking)
Detects AI hallucinations by verifying claims against the live web:
* Uses a fine-tuned **MT5 model** to generate search queries from input text.
* Cross-references claims using **Google Fact Check Tools** and **Custom Search APIs**.

### 3. Immutable Dispute Resolution
* **Non-Repudiation:** Anchors the SHA-256 hash of every verification report onto the **Polygon/Ethereum** blockchain.
* **Decentralized Storage:** Stores full analysis reports on **IPFS**, ensuring data persists even if the ScanIt servers go offline.

---

## 🛠️ Tech Stack

* **AI/Backend:** Python 3.12, FastAPI, PyTorch, Transformers (Hugging Face)
* **Frontend:** React.js, Tailwind CSS
* **Blockchain:** Solidity (Smart Contracts), Truffle, Ganache
* **Infrastructure:** IPFS (Kubo), Docker (Optional)

---

## ⚙️ Installation & Setup

Prerequisites: Python 3.12+, Node.js, and a GPU with at least 16GB VRAM (Recommended).

### 1. Clone the Repository
```bash
git clone https://github.com/Didfu/ScanIt.git
cd ScanIt

```

### 2. Backend Setup

```bash
# Create virtual environment
python -m venv venv
source venv/bin/activate  # Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
python -m playwright install --with-deps

```

### 3. IPFS Setup

Install IPFS Desktop App and run it on port 5002

### 4. Blockchain Setup

```bash
truffle init
enter no for the prompts asked
inside truffle-config.js and change port from 8545 to 7545
```

### 5. Run the Application

```bash
python server.py
```

The App will be available at `http://localhost:5001`.

---

## ⚖️ Acknowledgements & Attribution

ScanIt integrates and builds upon several open-source research projects. We strictly adhere to their licensing terms and attribute the original authors:

* **DetectGPT:** Core curvature-based detection logic adapted from *Mitchell et al. (2023)*. [Original Repo](https://github.com/eric-mitchell/detect-gpt)
* **Fast-DetectGPT:** Conditional probability scoring adapted from *Bao et al. (2023)*. [Original Repo](https://github.com/baoguangsheng/fast-detect-gpt)
* **GLTR:** Visual analysis overlays based on the GLTR framework by *Gehrmann et al. (2019)*. [Original Repo](https://github.com/HendrikStrobelt/detecting-fake-text) (Apache 2.0 License)

---

## 📖 Citation

If you use ScanIt in your research, please cite our paper.

https://doi.org/10.5281/zenodo.18759793

---

## 📝 License

This project is licensed under the **Apache-2.0 License** - see the [LICENSE](https://github.com/Didfu/ScanIt?tab=Apache-2.0-1-ov-file) file for details.
