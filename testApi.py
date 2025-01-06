from fastapi import FastAPI, File, UploadFile
import shutil
from pathlib import Path

app = FastAPI()

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)

@app.post("/upload/")
async def upload_file(file: UploadFile = File(...)):
    try:
        
        file_path = UPLOAD_DIR / file.filename
        with file_path.open("wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        return {"filename": file.filename, "message": "File uploaded successfully."}
    except Exception as e:
        return {"error": f"File upload failed: {str(e)}"}

#uvicorn main:app --reload