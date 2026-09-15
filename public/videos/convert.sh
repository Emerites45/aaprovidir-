python3 -c '
import os, subprocess, glob

files = glob.glob("*.mp4") + glob.glob("*.MP4")
for f in files:
    out = os.path.splitext(f)[0] + "-optimized.webm"
    print(f"Conversion de : {f} -> {out}")
    cmd = ["ffmpeg", "-i", f, "-c:v", "libvpx-vp9", "-b:v", "0", "-crf", "30", "-row-mt", "1", "-threads", "4", out]
    subprocess.run(cmd)
'
