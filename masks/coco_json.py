import json


class Coco_json:
    def __init__(self, *annotation) -> None:
        self.annotations = list(annotation)


class Annotation:
    def __init__(self, iscrowd, image_id, bbox, category_id, id) -> None:
        self.segmentation = []
        self.area = 0
        self.iscrowd = iscrowd
        self.image_id = image_id
        self.bbox = bbox
        self.category_id = category_id
        self.id = id


if __name__ == "__main__":
    annotations = [Annotation(0, 1, [0, 0, 100, 100], 1, 1)]
    jsonStr = json.dumps(Coco_json(annotations),
                         default=lambda o: o.__dict__,
                         indent=2,
                         sort_keys=True)
    print(jsonStr)
