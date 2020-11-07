import os
import glob
import pathlib


def run_fast_scandir(dir, ext):    # dir: str, ext: list
    subfolders, files = [], []

    for f in os.scandir(dir):
        if f.is_dir():
            subfolders.append(f.path)
        if f.is_file():
            if os.path.splitext(f.name)[1].lower() in ext:
                files.append(f.path)

    for dir in list(subfolders):
        sf, f = run_fast_scandir(dir, ext)
        subfolders.extend(sf)
        files.extend(f)
    return subfolders, files


subfolders, files = run_fast_scandir(os.getcwd(), [".md"])

for file in files:
    filename = os.path.basename(file)
    (name, ext) = os.path.splitext(filename)
    dir = pathlib.Path(file).parent.absolute()
    new_dir = dir.name + '/' + name
    print('creating folder: ' + new_dir)
    os.mkdir(new_dir)
    os.rename(file, new_dir+"/index.md")
    pass
