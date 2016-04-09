import os
import sys
import csv
import re
import pickle
from collections import Counter


def parse(filein, fileout):
  with open(filein, 'rb') as csvfile:
    reader = csv.DictReader(csvfile)
    fout = open(fileout, 'w')
    writer = csv.writer(fout) 
    fields = ['filename', 'username', 'computer', 'printer', 'port', 'size', 'pages']
    writer.writerow(fields)
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
      writer.writerow([matches.group('filename'), matches.group('username'), matches.group('computer'), matches.group('printer'), matches.group('port')[:-2], size, pages])
    pickle.dump(u.most_common(10), open(fileout+"_stats.p", "wb"))
    return ["a","b","c"]
