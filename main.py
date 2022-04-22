import json
import os

from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import HTMLResponse, RedirectResponse, JSONResponse
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates 


app = FastAPI()


app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



templates = Jinja2Templates(directory="build")


@app.get("/", response_class=HTMLResponse)
def read_item(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


app.mount("/", StaticFiles(directory="build", html=True), name="build")