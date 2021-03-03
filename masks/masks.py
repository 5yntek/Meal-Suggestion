from IPython.display import display
from PIL import Image, ImageDraw
import numpy as np
import matplotlib.pyplot as plt


def get_bounding_box(path, coco=False):
    im = Image.open(path)
    pix = im.load()

    width, height = im.size
    non_empty_pixel = []
    for x in range(width):
        for y in range(height):
            pixel = pix[x, y]
            if not pixel == (0, 0, 0):
                non_empty_pixel.append((x, y))

    a = np.asarray(non_empty_pixel)
    lr = tuple(np.amax(a, axis=0))
    ul = tuple(np.amin(a, axis=0))

    if coco:
        return [*ul, *(lr - ul)]
    else:
        return ul, lr


def show_bounding_box(path, upper_left, lower_right):
    im = Image.open(path)
    draw = ImageDraw.Draw(im)
    draw.rectangle((tuple(upper_left), tuple(lower_right)), outline="red")
    plt.imshow(im)
    plt.show()


if __name__ == "__main__":
    upper_left, lower_right = get_bounding_box(r'.\sample_image_v1\banana.png')
    show_bounding_box(r'.\sample_image_v1\banana.png', upper_left, lower_right)
