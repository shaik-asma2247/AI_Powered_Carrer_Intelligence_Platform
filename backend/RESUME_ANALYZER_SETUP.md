# CareerCast Resume Analyzer update

## Files to replace
- `frontend/src/pages/ResumeAnalyzer.jsx`
- `backend/controllers/resumeController.js`
- `backend/models/Resume.js`
- `backend/services/aiService.js`
- `backend/routes/resumeRoutes.js`
- `backend/middleware/uploadMiddleware.js`
- `ai-service/app/main.py`
- `ai-service/app/services/resume_parser.py`

## New file
- `frontend/src/pages/ResumeAnalyzer.css`

The React page imports this CSS file. Do not paste these page styles into `index.css`.

## Dependencies
Backend (from `backend`):
```powershell
npm install multer form-data axios
```
Python (from `ai-service`, with its venv activated):
```powershell
pip install fastapi uvicorn python-multipart python-dotenv pymupdf python-docx spacy
python -m spacy download en_core_web_sm
```

## Environment
Keep the existing `AI_SERVICE_URL` and `AI_SERVICE_SECRET` values. The same secret must exist in `backend/.env` and `ai-service/.env`. Never commit either `.env` file.

## Important
1. This version supports PDF, DOCX and TXT, each up to 5 MB.
2. PDF extraction is text-based. Scanned/image-only PDFs need OCR, which is not included in this version.
3. Summary, skill groups, score and suggestions are rule-assisted heuristics. They are not a trained generative model, ATS score or hiring prediction. Review the extracted content.
4. The updated schema stores the original upload as a MongoDB Buffer to enable View Original and Re-analyze. Keep each file under 5 MB; consider object storage such as Cloudinary/S3 if usage grows.
5. Older Resume documents do not have stored `fileData`; they can still be viewed as extracted results, but View Original/Re-analyze will ask you to upload again.
6. Back up your database before deploying a schema change. Existing documents remain readable because new parsedData properties have defaults.
7. If the backend currently handles Multer errors globally, keep that error handler. The middleware here rejects unsupported file types and oversize uploads.

## Run
Terminal 1:
```powershell
cd frontend
npm run dev
```
Terminal 2:
```powershell
cd backend
npm run dev
```
Terminal 3:
```powershell
cd ai-service
.\venv\Scripts\Activate.ps1
python -m uvicorn app.main:app --reload --port 8000
```

## Test
- Upload PDF, DOCX and TXT files separately.
- Verify skills/categories, personal details and extracted text against the actual resume.
- Test the original-file button, re-analysis, history view and delete.
- Confirm a user cannot access another user's resume ID.
