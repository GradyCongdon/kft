import os
import sys
import csv
import re
from collections import Counter


def parse(filein, fileout):
    with open(filein, 'rb') as csvfile:
        reader = csv.DictReader(csvfile)
        exp =  re.compile('Document (.*?), (?P<filename>.*?) owned by (?P<username>.*?) on (?P<computer>.*?) was printed on (?P<printer>.*?) through port (?P<port>.*?) Size in bytes: (?P<size>.*?)\. Pages printed: (?P<pages>.*?)\. (.*)')
        u = Counter()
        us = Counter()
        p = Counter()
        for row in reader:
            info = row[None][0]
            matches = exp.search(info)
            pages = int(matches.group('pages'))
            size = int(matches.group('size'))
            u[matches.group('username')] += pages
            us[matches.group('username')] += size
            p[matches.group('printer')] += pages
        print(u.most_common(10))
        print(p.most_common(10))
        print(us.most_common(10))

parse('uploads/march11log.csv', "abc")
