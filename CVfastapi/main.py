from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from fastapi.responses import HTMLResponse
import uvicorn

app = FastAPI()

# Uključite statičke datoteke (CSS i JS)
app.mount("/static", StaticFiles(directory="static"), name="static")

# Definišite rutu za prikaz HTML stranice
@app.get("/home", response_class=HTMLResponse)
async def read_root():
    with open("templates/home.html", "r", encoding="utf-8") as f:
        html_content = f.read()
    return HTMLResponse(content=html_content)


if __name__ == "__main__":
    uvicorn.run("main:app", host="0.0.0.0", port=8000, log_level="info")


