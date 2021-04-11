import os
import numpy as np
from PIL import Image

#loss of pixel precision but quadratic speedup
accuracy = 4;

rootFolder = "D:\Dokumente\Blender\Render\SYSL"

#Calculates the bbox for the .png mask
def getBBox(maskPath):
    im = Image.open(maskPath)
    pix = im.load()
    width, height = im.size
    minx = width
    maxx = 0
    miny = height
    maxy = 0
    x = 0
    #loop through pixels and compare the alpha channel with 0
    while x < width:
        y = 0
        while y < height:   
            if pix[x,y][3] != 0:
                #update the bounds of the bbox
                if minx > x:
                    minx = x
                if maxx < x:
                    maxx = x
                if miny > y:
                    miny = y
                if maxy < y:
                    maxy = y
            # jump over multiple lines to speedup the algorithm
            y += accuracy   
        x += accuracy
    #Correct the deviationof the accuracy by making the bbox slightly larger
    minx = max(minx - accuracy+1, 0)
    miny = max(miny - accuracy+1, 0)
    maxx = min(maxx + accuracy-1, width)
    maxy = min(maxy + accuracy-1, height)
    #return it as center coordinates
    return [(minx+((maxx-minx)/2))/width, (miny+((maxy-miny)/2))/height, (maxx-minx)/width, (maxy-miny)/height]

#writes data to a txt file
def writeLabel(path, data):
    f = open(path, "w")
    f.write(data)
    f.close()

#for a image, loop trough all masks, create the bboxes and write them to one file
def createLabel(imageID):
    data = ""
    dataCoco = ""
    masks = os.path.join(rootFolder, "masks", imageID)
    for mask in os.listdir(masks):
        maskID = mask.removesuffix(".png")
        maskPath = os.path.join(masks, mask)
        bbox = getBBox(maskPath)
        data = data + maskID + "    " + str(format(bbox[0], '.6f')) + "   " + str(format(bbox[1], '.6f')) + "   " + str(format(bbox[2], '.6f')) + "   " + str(format(bbox[3], '.6f')) + "\n"
        dataCoco = dataCoco + str(int(maskID)+46) + "    " + str(format(bbox[0], '.6f')) + "   " + str(format(bbox[1], '.6f')) + "   " + str(format(bbox[2], '.6f')) + "   " + str(format(bbox[3], '.6f')) + "\n"
    writeLabel(os.path.join(rootFolder, "labels", imageID) + ".txt", data)
    writeLabel(os.path.join(rootFolder, "labelsCoco", imageID) + ".txt", dataCoco)

#loop trough all images in the image folder
def createlabels():
    labelDir = os.path.join(rootFolder, "labels")
    try:
        os.mkdir(labelDir)
    except OSError:
         print ("Creation of the directory %s failed" % labelDir)
         return
    labelCocoDir = os.path.join(rootFolder, "labelsCoco")
    try:
        os.mkdir(labelCocoDir)
    except OSError:
         print ("Creation of the directory %s failed" % labelCocoDir)
         return

    imageDir = os.path.join(rootFolder, "images")
    maskDir = os.path.join(rootFolder, "masks")
    for image in os.listdir(imageDir):
        imageID = image.removesuffix(".jpg")
        print(imageID)
        data = createLabel(imageID)

createlabels()
